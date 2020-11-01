from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt
import imageServices.imageDetail as ImageDetail

class ExplorerComment(Resource):
    def get_explorer_comment(self,explorer_id):
        comment = db.db.comment.find({"explorer_id":explorer_id})
        result = []
        for c in comment:
            image_detail = ImageDetail.get_image_detail_from_db(c['image_id'])
            tem_result = {
                'image_detail' : image_detail,
                'comment_detail' : c['comment_detail'],
                'comment_time' : c['comment_time']
            }
            result.append(tem_result)
        return result
    @jwt_required
    def get(self):
        explorer_id = get_raw_jwt()["identity"]["id"]
        explorer_comment = self.get_explorer_comment(explorer_id)
        return explorer_comment, 200, None
