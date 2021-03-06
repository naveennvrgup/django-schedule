from django.db import models
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer


class Todo(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    edited_on = models.DateTimeField(auto_now=True)
    notified = models.BooleanField(default=False)
    version = models.IntegerField(default=0)
    completed = models.BooleanField(default=False)
    
    user = models.ForeignKey(User, related_name='todos',
                             on_delete=models.CASCADE)
    task = models.CharField(max_length=500)
    description = models.TextField(null=True)
    start = models.DateTimeField(null=True)
    end = models.DateTimeField(null=True)


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class TodoSerializer(ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Todo
