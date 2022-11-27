from images.models import Image

def image_list():
    return Image.objects.values('id', 'name')


def get_image_details(image_id):
    return Image.objects.get(id=image_id)
