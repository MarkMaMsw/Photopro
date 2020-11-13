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
            "http://img.duoziwang.com/2018/05/201712311846889.jpg",
            "http://img.duoziwang.com/2018/05/201712311846886.jpg",
            "http://img.duoziwang.com/2018/05/201712311946908.jpg",
            "http://img.duoziwang.com/2018/05/201712311846893.jpg",
            "http://img.duoziwang.com/2018/05/201712311946902.jpg",
            "http://img.duoziwang.com/2019/06/09130915916104.jpg",
            "http://img.duoziwang.com/2019/08/01111742211054.jpg",
            "http://img.duoziwang.com/2019/08/12281750908235.jpg",
            "http://img.duoziwang.com/2019/08/12281750908192.jpg",
            "http://img.duoziwang.com/2019/05/08211345614726.jpg",
            "http://img.duoziwang.com/2019/06/10190839805130.jpg",
            "http://img.duoziwang.com/2019/07/10291453907057.jpg",
            "http://img.duoziwang.com/2019/08/12281750908132.jpg",
            "http://img.duoziwang.com/2019/01/02151618710994.jpg",
            "http://img.duoziwang.com/2019/01/02151618711160.jpg",
            "http://img.duoziwang.com/2019/01/02151618711226.jpg",
            "http://img.duoziwang.com/2019/01/02151618710886.jpg",
            "http://img.duoziwang.com/2019/01/02151618710511.jpg",
            "http://img.duoziwang.com/2018/24/11121913804686.jpg",
            "http://img.duoziwang.com/2018/24/11121913802588.jpg",
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