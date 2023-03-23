import requests
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .permissions import *
from .serializers import *
from .models import *


class ListProgrammsAPI(generics.ListAPIView):
    queryset = Programms.objects.all()
    serializer_class = ProgrammsSerializer


class ListInfoCoursesAPI(generics.ListAPIView):
    serializer_class = InfoCoursesSerializer

    def get_queryset(self):
        query = InfoCourses.objects.filter(programm_name__link=self.request.query_params['programm'])

        return query


class ListPricesAPI(generics.ListAPIView):
    queryset = PriceCourses.objects.all().order_by('id')
    serializer_class = PricesCoursesSerializer


class ObjectUserAPI(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, TokenIsInvalid)

    def get_object(self):
        obj = Users.objects.get(username=self.request.user)
        return obj


class UserCoursesUpdateAPI(generics.UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, IsUserProgrammPrice, TokenIsInvalid)

    def get_object(self):
        obj = Users.objects.get(username=self.request.user)
        return obj


class BlackListAddJWT(generics.CreateAPIView):
    queryset = BlackListJWT.objects.all()
    serializer_class = BlackListJWTSerializer


class CreateRecordConsultationAPI(generics.CreateAPIView):
    queryset = RecordConsultation.objects.all()
    serializer_class = RecordConsultationSerializer


class ActivateJWT(generics.GenericAPIView):
    def get(self, request, uid, token):
        payload = {'uid': uid, 'token': token}
        url = "http://127.0.0.1:8000/auth/users/activation/"
        response = requests.post(url, data=payload)

        if response.status_code == 204:
            return render(request, 'activation.html')
        else:
            return Response(response.json())
# Create your views here.
