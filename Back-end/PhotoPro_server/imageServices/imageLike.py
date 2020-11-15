from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
import dev.config as config
class PostImageLike(Resource):
    @jwt_required
    def post(self):
        #print(get_raw_jwt()["identity"])
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        input_request = request.json
        search_info = {"explorer_id":get_raw_jwt()["identity"]["id"],"image_id":input_request["image_id"]}
        like_history = db.db.like.find_one(search_info)
        if not like_history:
            like_info = {
                "explorer_id" : get_raw_jwt()["identity"]["id"],
                "image_id" : input_request["image_id"],
                "like_status" : input_request["status"],
                "like_time" : str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
            }
            db.db.like.insert_one(like_info)
            result = {'status':'create like successfully'}
        else:
            like_history["like_status"] = input_request["status"]
            if like_history["like_status"] == "active":
                like_history["like_time"] = str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
            db.db.like. find_one_and_replace(search_info, like_history)
            result = {'status':'update like successfully'}
        
        return result, 200, None

class GetImageLike(Resource):
    def get(self,imageId):
        like = db.db.like.find({"image_id":imageId,"like_status":"active"})
        result = []
        for i in like:
            explorer_id = i["explorer_id"]
            explorer = db.db.user.find_one({"id":explorer_id})
            if i["like_status"] == "active":
                tem_result = {
                    "explorer_name" : explorer["username"],
                    "like_time" : i["like_time"]
                }
                result.append(tem_result)
        return result, 200, None
