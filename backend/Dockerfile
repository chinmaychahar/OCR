FROM python:3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install --assume-yes python3-pil tesseract-ocr

COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app
