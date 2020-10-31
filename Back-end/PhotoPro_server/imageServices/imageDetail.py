from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
class ImageDetail(Resource):
    #get image detail
    def get(self,imageId):
        
        #image_id = int(imageId)
        image = db.db.image.find_one({"image_id":imageId})
        #print(type(imageId))
        print(type(image))
        image_url = config.ip_address + config.image_file_url + image['image_name']
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