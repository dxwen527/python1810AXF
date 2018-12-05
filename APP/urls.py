from django.conf.urls import url

from APP import views

urlpatterns = [
    url(r'^$',views.index,name='index')
]