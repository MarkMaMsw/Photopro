from flask import request, g
import db
from flask_restful import Resource
import json
class ImageDetail(Resource):
    #get image detail
    def get(self,imageId):
        ip_address = "http://127.0.0.1:5000"
        file_url = "/image/file/"
        image_id = int(imageId)
        image = db.db.image.find_one({"image_id":imageId})
        #print(type(imageId))
        print(type(image))
        image_url = ip_address + file_url + image['image_name']
        result = {
            'image_id': image['image_id'], 
            'contributor_id': image['contributor_id'], 
            'title': image['title'], 
            'price': image['price'], 
            'status': image['status'], 
            'tag': image['tag'], 
            'image_name': image['image_name'],
            'image_url': image_url
        }
        return result, 200, None