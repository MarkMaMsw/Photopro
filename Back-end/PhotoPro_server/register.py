from flask import request, g

import db
import time
import encrypt
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, get_jwt_identity, get_raw_jwt)

                 
class AuthRegister(Resource):

    def post(self):
        g.user = request.json
        requiredValues = ["username","password","email","description","userType"]
        for i in requiredValues:
            if i in g.user.keys():
                if g.user[i] == "":
                    return "Some info missed", 400, None
            else:
                return "key name error", 400, None      
        if g.user["userType"] not in ["contributor","explorer"]:
            return "userType value is not valid", 400, None
        if (db.db.user.find_one({"email":request.json["email"],"userType":request.json["userType"]}) != None):
            return "The user exists", 409, None
            

        g.user["password"] = encrypt.generate_hash(request.json["password"])
        g.user["balance"] = 1000
        g.user["id"] = str(int(time.time()))
        db.db.user.insert_one(g.user)

        access_token = create_access_token({"user":g.user["email"],"type":g.user["userType"],"id":g.user["id"]},expires_delta=False)
        # refresh_token = create_refresh_token(g.user["email"])

        return {
                "message": "Created user",
                "access_token": access_token
                 }, 200, None

