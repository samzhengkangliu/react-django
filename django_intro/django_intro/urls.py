from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('demo/', include('demo.urls')),
    # POST username password to retrieve token
    path('auth/', obtain_auth_token)
]
