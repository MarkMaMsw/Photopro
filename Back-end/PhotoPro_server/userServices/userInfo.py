from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt

def get_user_info(user_id):
    try:
        user = db.db.user.find_one({"id":user_id})
        image_num = db.db.image.find({"contributor_id":user_id,"status":"on_shop"}).count()
        if not user:
            return False
        attributes = ["username","email","description","balance","id","userType","photoURL"]
        result = {}
        for i in attributes:
            result[i] = user[i]
        result["image_num"]=image_num
        return result
    except:
        return []

class UserDetail(Resource):
    @jwt_required
    def put(self):
        user_id = get_raw_jwt()["identity"]["id"]
        input_data = request.json
        attributes = ["username","email","description"]
        try:
            new_username = input_data["username"]
            new_description = input_data["description"]
        except:
            return "update error", 409, None
        if new_username:
            update = db.db.user.update_one({"id":user_id},{"$set": { "username": new_username }})
            if not update:
                return "update error", 409, None
        if new_description:
            update = db.db.user.update_one({"id":user_id},{"$set": { "description": new_description }})
            if not update:
                return "update error", 409, None
        return "update success", 200, None

class UserInfo(Resource):
    #get image detail
    def get(self,userId):
        
        #image_id = int(imageId)
        result = get_user_info(userId)
        if result:
            return result, 200, None
        else:
            return "not found", 404, None
    

            
