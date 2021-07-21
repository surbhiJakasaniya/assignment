from django.contrib import admin

# Register your models here.

from .models import Project
from .models import ProjectTask


admin.site.register(Project)
admin.site.register(ProjectTask)

