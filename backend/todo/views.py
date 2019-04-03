from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .models import *


@api_view(['post'])
def signup_view(req):
    data = JSONParser().parse(req)
    try:
        user = User.objects.create_user(
            username=data['username'],
            password=data['password'],
            email=data['email']
        )
        sdata = UserSerializer(User.objects.all()[0])
        print(sdata.data)
        return Response({
            **sdata.data,
            "password": ''
        })
    except:
        return Response({'error': 'something went wrong'})


@api_view(['get', 'post'])
def list_view(req):
    if req.method=='GET':
        sdata = TodoSerializer(Todo.objects.all(), many=True)
        return Response(sdata.data)

    data = JSONParser().parse(req)
    todo = Todo.objects.create(
        task=data['task'],
        description=data['description'],
        start=data['start'],
        user=req.user
    )
    sdata = TodoSerializer(todo)
    return Response(sdata.data)




@api_view(['get', 'post', 'delete'])
def show_view(req, id):
    if req.method == 'DELETE':
        todo = Todo.objects.get(pk=id)
        sdata = TodoSerializer(todo)
        todo.delete()
        return Response(sdata.data)
    elif req.method == 'GET':
        sdata = TodoSerializer(Todo.objects.get(pk=id))
        return Response(sdata.data)

    # post
    data = JSONParser().parse(req)
    todo = Todo.objects.get(pk=id)
    todo.completed = data['completed']
    todo.save()
    sdata = TodoSerializer(todo)
    return Response(sdata.data)