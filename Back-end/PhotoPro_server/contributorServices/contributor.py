from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt


class ContributorInfo(Resource):
    @jwt_required
    def get(self):
        contributorID = get_raw_jwt()["identity"]["id"]
        user = db.db.user.find_one({"id":contributorID})
        image_num = db.db.image.find({"contributor_id":contributorID,"status":"on_shop"}).count()
        if not user:
            return "The user not exists", 404, None
        newUser = {}
        attributes = ["id","username","email","description","balance","userType"]
        for i in attributes:
            newUser[i] = user[i]
        newUser['image_num'] = image_num
        #newUser = json.dumps(newUser)
        return {
                "message": "found user",
                "content": newUser
                 }, 200, None