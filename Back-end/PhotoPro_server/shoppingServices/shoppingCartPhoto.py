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
        image = db.db.image.find_one({"image_id":input_request["image_id"],"status":"on_shop"})
        if not image:
            return "image not found", 404, None
        image_buy = db.db.order.find_one({"image_id":input_request["image_id"],"explorer_id":get_raw_jwt()["identity"]["id"]})
        if image_buy:
            return "you have bought it", 409, None
        image_buy = db.db.shoppingcart.find_one({"image_id":input_request["image_id"],"explorer_id":get_raw_jwt()["identity"]["id"],"status":"on"})
        if image_buy:
            return "you have added it into shoppingcart", 410, None
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
    @jwt_required
    def delete(self):
        #print(get_raw_jwt()["identity"])
        try:
            if get_raw_jwt()["identity"]["type"] != 'explorer':
                result = {'status':'you are not explorer'}
                return result, 403, None
            input_request = request.json
            explorer_id = get_raw_jwt()["identity"]["id"]
            image = db.db.shoppingcart.find_one({"image_id":input_request["image_id"],"explorer_id":explorer_id})
            if not image:
                return "image not found", 409, None
            else:
                delete = db.db.shoppingcart.delete_one({"image_id":input_request["image_id"],"explorer_id":explorer_id})
                if delete:
                    result = {'status':'add success'}
                    return result, 200, None
                else:
                    result = {'status':'delete fail'}
                    return result, 409, None
        except:
            result = {'status':'delete error'}
            return result, 409, None


            


