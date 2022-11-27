from django.conf.urls import include, url
from django.contrib import admin

from images.views import UploadImageView, ImageListView, ImageDetailsView

urlpatterns = [
    # Examples:
    # url(r'^$', 'ocr.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', admin.site.urls),
    url(r'^upload_images/$', UploadImageView.as_view()),
    url(r'^list_images/$', ImageListView.as_view()),
    url(r'^images/([0-9]+)/$', ImageDetailsView.as_view()),
]
