from rest_framework import serializers
from .models import *


class ProgrammsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Programms
        fields = '__all__'


class InfoCoursesSerializer(serializers.ModelSerializer):

    class Meta:
        model = InfoCourses
        fields = '__all__'


class PricesCoursesSerializer(serializers.ModelSerializer):
    list_type_class = serializers.SerializerMethodField()

    class Meta:
        model = PriceCourses
        fields = ('title', 'description', 'additional', 'list_type_class')

    def get_list_type_class(self, instance):
        return TypeClassSerializer(TypeClass.objects.filter(type_courses=instance.pk), many=True).data


class TypeClassSerializer(serializers.ModelSerializer):
    list_type_courses = serializers.SerializerMethodField()

    class Meta:
        model = TypeClass
        fields = ('title', 'list_type_courses')

    def get_list_type_courses(self, instance):
        return TypePriceSerializer(TypePrice.objects.filter(type_class=instance.pk), many=True).data


class TypePriceSerializer(serializers.ModelSerializer):
    full_price = serializers.SerializerMethodField()

    class Meta:
        model = TypePrice
        fields = '__all__'

    def get_full_price(self, instance):
        result = (instance.count_lessons * instance.price // 100) * (100 - instance.discount)
        return result

