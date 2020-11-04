from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
class IndexImage(Resource):
    def get_detail_from_db(self):
        image = db.db.image.find()
        result = []
        for i in image:
            tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
            result.append(tem_result)
        return result
    #get image detail
    def get(self):
        all_image = self.get_detail_from_db()
        return all_image, 200, None