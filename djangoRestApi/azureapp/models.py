from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=800)
    duration = models.CharField(max_length=300)
    image = models.ImageField(upload_to = "images/",null=True, blank=True) 

class ProjectTask(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=800)
    start_date = models.DateField()
    end_date = models.DateField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
