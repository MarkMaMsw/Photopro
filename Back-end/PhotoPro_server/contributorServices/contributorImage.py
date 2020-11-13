from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import imageServices.imageDetail as imageDetail
class ContributorImage(Resource):
    def get_detail_from_db(self,contributorId):
        image_on_shop = db.db.image.find({"contributor_id":contributorId,"status":"on_shop"})
        image_off_shop = db.db.image.find({"contributor_id":contributorId,"status":"off_shop"})
        result = []
        for i in image_on_shop:
            tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
            result.append(tem_result)
        for i in image_off_shop:
            tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
            result.append(tem_result)
        return result
    #get image detail
    def get(self,contributorId):
        all_image = self.get_detail_from_db(contributorId)
        return all_image, 200, None