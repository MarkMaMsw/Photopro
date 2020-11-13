from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
import dev.config as config
class PostImageComment(Resource):
    #upload image
    @jwt_required
    def post(self):
        #print(get_raw_jwt()["identity"])
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        input_request = request.json
        comment_info = {
            "explorer_id" : get_raw_jwt()["identity"]["id"],
            "image_id" : input_request["image_id"],
            "comment_detail" : input_request["comment_detail"],
            "comment_time" : str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
        }
        db.db.comment.insert_one(comment_info)
        result = {'status':'comment success'}
        return result, 200, None

class GetImageComment(Resource):
    def get(self,imageId):
        comment = db.db.comment.find({"image_id":imageId})
        result = []
        for i in comment:
            explorer_id = i["explorer_id"]
            explorer = db.db.user.find_one({"id":explorer_id})
            tem_result = {
                "explorer_name" : explorer["username"],
                "comment_detail" : i["comment_detail"],
                "comment_time" : i["comment_time"]
            }
            result.append(tem_result)
        return result, 200, None
