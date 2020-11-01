from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt
import imageServices.imageDetail as ImageDetail

class ExplorerLike(Resource):
    def get_explorer_like(self,explorer_id):
        comment = db.db.like.find({"explorer_id":explorer_id})
        result = []
        for c in comment:
            image_detail = ImageDetail.get_image_detail_from_db(c['image_id'])
            tem_result = {
                'image_detail' : image_detail,
                'like_status' : c['like_status'],
                'like_time' : c['like_time']
            }
            result.append(tem_result)
        return result
    @jwt_required
    def get(self):
        explorer_id = get_raw_jwt()["identity"]["id"]
        explorer_like = self.get_explorer_like(explorer_id)
        return explorer_like, 200, None
