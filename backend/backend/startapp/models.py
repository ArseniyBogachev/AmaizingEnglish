from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator
from django.db import models


class Users(AbstractUser):
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    programm = models.ForeignKey('Programms', on_delete=models.PROTECT, null=True, blank=True)
    price = models.ForeignKey('PriceCourses', on_delete=models.PROTECT, null=True, blank=True)

    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'age']

    def __str__(self):
        return self.last_name


class Programms(models.Model):
    title = models.TextField()
    programm_name = models.CharField(max_length=50, unique=True)
    link = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.programm_name


class InfoCourses(models.Model):
    title_level = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    list_courses = models.JSONField()
    programm_name = models.ForeignKey(Programms, on_delete=models.PROTECT)

    def __str__(self):
        return self.title_level


class PriceCourses(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    additional = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.title


class TypeClass(models.Model):
    title = models.CharField(max_length=50)
    type_courses = models.ForeignKey(PriceCourses, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.title} курс: {self.type_courses}'


class TypePrice(models.Model):
    title = models.CharField(max_length=50)
    count_lessons = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    discount = models.PositiveIntegerField(default=0, validators=[MaxValueValidator(100)])
    """добавить поле time_lesson (за академический час/за 60 мин)"""
    type_class = models.ForeignKey(TypeClass, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.title} тип: {self.type_class}'

# Create your models here.
