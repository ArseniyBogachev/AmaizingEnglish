from rest_framework import permissions
from .models import *


class IsUserProgrammPrice(permissions.BasePermission):
    def has_permission(self, request, view):
        programm = InfoCourses.objects.get(pk=request.data['programm'])
        price = TypePrice.objects.get(pk=request.data['price'])

        print(programm.programm_name)
        print(price.type_programm)
        return programm.programm_name == price.type_programm