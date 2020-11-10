from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
import dev.config as config
import imageServices.imageDetail as ImageDetail
class ShoppingCartPhoto(Resource):
    #upload image
    @jwt_required
    def post(self):
        #print(get_raw_jwt()["identity"])
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        input_request = request.json
        image = db.db.image.find_one({"image_id":input_request["image_id"]})
        if not image:
            return "image not found", 409, None
        shopping_info = {
            "explorer_id" : get_raw_jwt()["identity"]["id"],
            "image_id" : input_request["image_id"],
            "status" : "on",#1,on;2,off
            "add_time" : str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
        }
        db.db.shoppingcart.insert_one(shopping_info)
        result = {'status':'add success'}
        return result, 200, None

    @jwt_required
    def get(self):
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        try:
            shoppingcart = db.db.shoppingcart.find({"explorer_id" : get_raw_jwt()["identity"]["id"],"status":"on"})
            result = []
            for cart in shoppingcart:
                image_detail = ImageDetail.get_image_detail_from_db(cart['image_id'])
                result.append(image_detail)
            return result, 200, None
        except:
            return "error", 409, None

            


