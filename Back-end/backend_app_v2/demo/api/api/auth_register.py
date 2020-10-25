# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function

from flask import request, g

from .. import db
from .. import auth
from . import Resource
from .. import schemas
from flask_jwt_extended import (create_access_token, create_refresh_token, get_jwt_identity, get_raw_jwt)


class AuthRegister(Resource):

    def post(self):
        
        if (db.db.user.find_one({"email":request.json["email"],"userType":request.json["userType"]}) != None):
            return "The user exists", 409, None
        g.user = request.json
        g.user["password"] = auth.generate_hash(request.json["password"])
        db.db.user.insert_one(g.user)

        access_token = create_access_token({"user":g.user["email"],"type":g.user["userType"]})
        # refresh_token = create_refresh_token(g.user["email"])

        return {
                "message": "Created user",
                "access_token": access_token
                 }, 200, None