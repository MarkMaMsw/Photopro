from flask import request, g

import db
import auth
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, get_jwt_identity, get_raw_jwt)


class AuthLogin(Resource):

    def post(self):
        g.user = request.json
        user = db.db.user.find_one({"email":request.json["username"],"userType":request.json["userType"]})

        if not user:
            return "The user not exists", 400, None

        if not auth.verigy_hash(g.user["password"],user["password"]):
            return "The password not correct", 400, None
        access_token = create_access_token({"user":g.user["username"],"type":g.user["userType"],"id":user["id"]})
        # refresh_token = create_refresh_token(g.user["username"])

        return {
                "message": "Logged in",
                "access_token": access_token
                 }, 200, None
                 
class AuthRegister(Resource):

    def post(self):
        if (db.db.user.find_one({"email":request.json["email"],"userType":request.json["userType"]}) != None):
            return "The user exists", 409, None
        g.user = request.json
        g.user["password"] = auth.generate_hash(request.json["password"])
        g.user["id"] = str(int(db.db.user.find_one(sort=[("id", -1)])["id"])+1)
        db.db.user.insert_one(g.user)

        access_token = create_access_token({"user":g.user["email"],"type":g.user["userType"],"id":g.user["id"]})
        # refresh_token = create_refresh_token(g.user["email"])

        return {
                "message": "Created user",
                "access_token": access_token
                 }, 200, None

