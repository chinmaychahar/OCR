from rest_framework import serializers, views
from rest_framework.response import Response

from images.queries import image_list, get_image_details
from images.services import upload_image


class UploadImageSerializer(serializers.Serializer): 
    name = serializers.CharField(max_length=255)
    images = serializers.ListField(child=serializers.ImageField(), read_only=False)


class UploadImageView(views.APIView):
    def post(self, request):
        serializer = UploadImageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        name, images = serializer.validated_data['name'], serializer.validated_data['images']
        upload_image(name, images)

        return Response()


class ImageListSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class ImageListView(views.APIView):
    def get(self, request):
        return Response(data=ImageListSerializer(image_list(), many=True).data)


class ImageDetailsSerializer(serializers.Serializer):
    name = serializers.CharField()
    text = serializers.CharField()


class ImageDetailsView(views.APIView):
    def get(self, request, image_id):
        return Response(data=ImageDetailsSerializer(get_image_details(image_id)).data)
