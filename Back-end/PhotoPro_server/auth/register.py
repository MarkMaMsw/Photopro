from flask import request, g

import db
import time
import encrypt
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, get_jwt_identity, get_raw_jwt)
import random

                 
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
            
        photo_url = [
            "201712311846889.jpg",
            "201712311846886.jpg",
            "201712311946908.jpg",
            "201712311846893.jpg",
            "201712311946902.jpg",
            "09130915916104.jpg",
            "01111742211054.jpg",
            "12281750908235.jpg",
            "12281750908192.jpg",
            "08211345614726.jpg",
            "10190839805130.jpg",
            "10291453907057.jpg",
            "12281750908132.jpg",
            "02151618710994.jpg",
            "02151618711160.jpg",
            "02151618711226.jpg",
            "02151618710886.jpg",
            "02151618710511.jpg",
            "11121913804686.jpg",
            "11121913802588.jpg",
        ]
        random_num = random.randint(0,19)
        g.user["password"] = encrypt.generate_hash(request.json["password"])
        g.user["balance"] = 1000
        g.user["id"] = str(int(round(time.time() * 1000000)))
        g.user["photoURL"] = photo_url[random_num]
        db.db.user.insert_one(g.user)

        access_token = create_access_token({"user":g.user["email"],"type":g.user["userType"],"id":g.user["id"]},expires_delta=False)
        # refresh_token = create_refresh_token(g.user["email"])

        return {
                "message": "Created user",
                "access_token": access_token
                 }, 200, None