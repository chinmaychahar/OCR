from PIL import Image
from pytesseract import image_to_string

from images.models import Image

def uploaded_file_to_string(image):
    image = Image.open(image)
    return image_to_string(image)


def upload_image(name, images):
    text = map(uploaded_file_to_string, images)
    text = ''.join(text)
    return Image.objects.create(name=name, text=text)
