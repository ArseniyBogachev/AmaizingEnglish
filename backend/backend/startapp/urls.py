from django.urls import path, re_path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from .views import *

urlpatterns = [
    path('api/v1/listprogramms/', ListProgrammsAPI.as_view(), name='list_programms'),
    path('api/v1/listinfocourses/', ListInfoCoursesAPI.as_view(), name='list_info_courses'),
    path('api/v1/listprices/', ListPricesAPI.as_view(), name='list_prices'),
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.jwt')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]