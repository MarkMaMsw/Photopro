from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
import dev.config as config
import imageServices.imageDetail as imageDetail
class ImageCollection(Resource):
    @jwt_required
    def post(self):
        print(get_raw_jwt()["identity"])
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        input_request = request.json
        collection_info = {
            "id": str(int(time.time())),
            "explorer_id" : get_raw_jwt()["identity"]["id"],
            "collection_name" : input_request["name"],
            "collection_details" : input_request["detail"],
            "collection_images": []
        }
        db.db.collection.insert_one(collection_info)
        result = {'status':'create collection successfully'}
        return result, 200, None

    @jwt_required
    def put(self):
        print(get_raw_jwt()["identity"])
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        input_request = request.json
        search_info = {"explorer_id" : get_raw_jwt()["identity"]["id"],"id" : input_request["id"]}
        collection_history = db.db.collection.find_one(search_info)
        collection_history["collection_name"] = input_request["name"]
        collection_history["collection_details"] = input_request["detail"]
        collection_history["collection_images"] = input_request["images"]           
        db.db.collection.find_one_and_replace(search_info,collection_history)
        result = {'status':'update collection successfully'}
        return result, 200, None
    
    @jwt_required
    def get(self):
        if get_raw_jwt()["identity"]["type"] != 'explorer':
            result = {'status':'you are not explorer'}
            return result, 403, None
        collection = db.db.collection.find({"explorer_id" : get_raw_jwt()["identity"]["id"]})
        result = []
        for i in collection:
            images = []
            image_list = i["collection_images"]
            for j in image_list:
                image = imageDetail.get_image_detail_from_db(j)
                '''
                image = db.db.image.find_one({"image_id":j})
                image.pop("_id")
                '''
                images.append(image)
            i["collection_images"] = images
            attributes = ["_id","explorer_id"]
            for k in attributes:
                i.pop(k)
            result.append(i)
        return result, 200, None

    
