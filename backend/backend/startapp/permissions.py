from rest_framework import permissions
from .models import *


class IsUserProgrammPrice(permissions.BasePermission):
    def has_permission(self, request, view):
        programm = InfoCourses.objects.get(pk=request.data['programm'])
        price = TypePrice.objects.get(pk=request.data['price'])

        return programm.programm_name == price.type_programm


class TokenIsInvalid(permissions.BasePermission):
    def has_permission(self, request, view):
        # if request.method in permissions.SAFE_METHODS:
        #     return True

        user = request.user.id
        jwt_token = True
        try:
            black_list = BlackListJWT.objects.get(user=user, token=request.auth)

            if black_list:
                jwt_token = False
        except:
            jwt_token = True

        return jwt_token