from django.db.models import Case, When, Value
from rest_framework import serializers
from .models import *


class ProgrammsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Programms
        fields = '__all__'


class InfoCoursesSerializer(serializers.ModelSerializer):
    programm_name = serializers.CharField(source='programm_name.programm_name')

    class Meta:
        model = InfoCourses
        fields = '__all__'


class PricesCoursesSerializer(serializers.ModelSerializer):
    list_type_class = serializers.SerializerMethodField()
    type_programm = serializers.CharField(source='type_programm.programm_name')

    class Meta:
        model = PriceCourses
        fields = ('title', 'description', 'additional', 'list_type_class', 'type_programm')

    def get_list_type_class(self, instance):
        return TypeClassSerializer(TypeClass.objects.filter(type_courses=instance.pk).annotate(annotate_time_lesson=Case(
            When(time_lesson=50, then=Value('по 50 мин.')),
            When(time_lesson=60, then=Value('по 60 мин.')),
            When(time_lesson=80, then=Value('по 80 мин.')),
            default=Value('за 1 академический час')
        )), many=True).data


class TypeClassSerializer(serializers.ModelSerializer):
    list_type_courses = serializers.SerializerMethodField()
    annotate_time_lesson = serializers.CharField()

    class Meta:
        model = TypeClass
        fields = ('title', 'list_type_courses', 'type_courses', 'time_lesson', 'annotate_time_lesson',)

    def get_list_type_courses(self, instance):
        return TypePriceSerializer(TypePrice.objects.filter(type_class=instance.pk).order_by('id'), many=True).data


class TypePriceSerializer(serializers.ModelSerializer):
    full_price = serializers.SerializerMethodField()
    type_programm = serializers.CharField(source='type_programm.programm_name')

    class Meta:
        model = TypePrice
        fields = '__all__'

    def get_full_price(self, instance):
        result = (instance.count_lessons * instance.price // 100) * (100 - instance.discount)
        return result


class UserSerializer(serializers.ModelSerializer):
    info = serializers.SerializerMethodField()

    class Meta:
        model = Users
        fields = ('first_name', 'last_name', 'dob', 'email', 'programm', 'price', 'info')

    def get_info(self, instance):
        query = TypePriceSerializer(TypePrice.objects.get(pk=instance.price.id)).data
        return {
            'title_level': instance.programm.title_level,
            'full_price': query['full_price'],
            'count_lessons': query['count_lessons'],
            'type_class': instance.price.type_class.title
        }


class BlackListJWTSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = BlackListJWT
        fields = "__all__"


class RecordConsultationSerializer(serializers.ModelSerializer):

    class Meta:
        model = RecordConsultation
        fields = '__all__'

