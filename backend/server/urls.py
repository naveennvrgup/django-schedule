from django.contrib import admin
from django.urls import path, re_path
from rest_framework.authtoken.views import obtain_auth_token
from django.views.generic import TemplateView

from todo.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    # auth
    path('login/', obtain_auth_token),
    path('signup/', signup_view),
    # todo
    path('todo/', list_view),
    path('todo/<int:id>/', show_view),
    path('completed/<int:id>/', completed_view),

    re_path('', TemplateView.as_view(template_name="index.html")),
]
