from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt


class ExplorerInfo(Resource):
    @jwt_required
    def get(self):
        explorerID = get_raw_jwt()["identity"]["id"]
        user = db.db.user.find_one({"id":explorerID})

        if not user:
            return "The user not exists", 400, None
        
        newUser = {}
        attributes = ["id","username","email","description","balance","userType","photoURL"]
        for i in attributes:
            newUser[i] = user[i]
        #newUser = json.dumps(newUser)
        return {
                "message": "found user",
                "content": newUser
                 }, 200, None