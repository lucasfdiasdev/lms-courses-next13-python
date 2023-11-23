from django.db import models

# Create your models here.
class Teacher(models.Model):
  full_name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  password = models.CharField(max_length=100)
  qualification = models.CharField(max_length=200)
  mobile_no=models.CharField(max_length=20)
  address = models.TextField(max_length=200)

# course category model
class CourseCategory(models.Model):
  title = models.CharField(max_length=150, unique=True)
  description = models.TextField(max_length=500, blank=True)

  class Meta:
    verbose_name_plural = "Course Categories"

# course model
class Course(models.Model):
  category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
  teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
  title = models.CharField(max_length=150, unique=True)
  description = models.TextField(max_length=500, blank=True)


# Create your models here.
class Student(models.Model):
  full_name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  password = models.CharField(max_length=100)
  qualification = models.CharField(max_length=200)
  mobile_no=models.CharField(max_length=20)
  address = models.TextField(max_length=200)
  interesed_categories = models.TextField()