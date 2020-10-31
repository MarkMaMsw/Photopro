from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
class ContributorImage(Resource):
    def get_detail_from_db(self,contributorId):
        image = db.db.image.find({"contributor_id":contributorId})
        result = []
        for i in image:
            image_url = config.ip_address + config.image_file_url + i['image_name']
            tem_result = {
                'image_id': i['image_id'], 
                'contributor_id': i['contributor_id'], 
                'title': i['title'], 
                'price': i['price'], 
                'status': i['status'], 
                'tag': i['tag'], 
                'image_name': i['image_name'],
                'image_url': image_url
            }
            result.append(tem_result)
        return result
    #get image detail
    def get(self,contributorId):
        all_image = self.get_detail_from_db(contributorId)
        return all_image, 200, None