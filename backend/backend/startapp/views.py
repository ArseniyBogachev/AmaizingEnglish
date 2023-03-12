from django.shortcuts import render
from rest_framework import generics
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

# Create your views here.
