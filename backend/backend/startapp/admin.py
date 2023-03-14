from django.contrib import admin
from .models import *

admin.site.register(Users)
admin.site.register(Programms)
admin.site.register(InfoCourses)
admin.site.register(PriceCourses)
admin.site.register(TypeClass)
admin.site.register(TypePrice)
admin.site.register(BlackListJWT)
# Register your models here.
