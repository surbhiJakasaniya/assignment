from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from azureapp.models import Project, ProjectTask


from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from azureapp.serializers import UserSerializer, ProjectSerializer, ProjectMiniSerializer, ProjectTaskSerializer, ProjectTaskMiniSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    # def list(self, request, *args, **kwargs):

    #     projects = Project.objects.all()
    #     serializer = ProjectMiniSerializer(projects, many=True,partial=True)
    #     return Response(serializer.data)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):

        projects = Project.objects.all()
        serializer = ProjectMiniSerializer(projects, many=True,partial=True)
        return Response(serializer.data)


class ProjectTaskViewSet(viewsets.ModelViewSet):
    queryset = ProjectTask.objects.all()
    serializer_class = ProjectTaskSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        project_tasks = ProjectTask.objects.all()
        project = self.request.query_params.get('project')
        if project is not None:
            project_tasks = project_tasks.filter(project__id=project)

        serializer = ProjectTaskMiniSerializer(project_tasks, many=True)
        return Response(serializer.data)



def index(request):
    response = json.dumps([{}])
    return HttpResponse(response, content_type='text/json')

def get_all_project(request):
    try:
        projects = Project.objects.all()
        response = json.dumps([{ 'name': project.name, 'description': project.description} for project in projects])
    except:
        response = json.dumps([{ 'Error': 'Not any project available'}])
    return HttpResponse(response, content_type='text/json')

def get_project(request, project_name):
    if request.method == 'GET':
        try:
            project = Project.objects.get(name=project_name)
            response = json.dumps([{ 'Project Name': project.name, 'description': project.description}])
        except:
            response = json.dumps([{ 'Error': 'No project with that name'}])
    return HttpResponse(response, content_type='text/json')

@csrf_exempt
def add_project(request):
    if request.method == 'POST':
        payload = json.loads(request.body)
        project_name = payload['project_name']
        description = payload['description']
        project = Project(name=project_name, description=description)
        try:
            project.save()
            response = json.dumps([{ 'Success': 'Project added successfully!'}])
        except:
            response = json.dumps([{ 'Error': 'Project could not be added!'}])
    return HttpResponse(response, content_type='text/json')
