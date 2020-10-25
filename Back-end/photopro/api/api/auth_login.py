# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function

from flask import request, g

from .. import db
from .. import auth
from . import Resource
from .. import schemas
from flask_jwt_extended import (create_access_token, create_refresh_token, get_jwt_identity, get_raw_jwt)


class AuthLogin(Resource):

    def post(self):
        g.user = request.json
        user = db.db.user.find_one({"email":request.json["username"],"userType":request.json["userType"]})

        if not user:
            return "The user not exists", 400, None

        if not auth.verigy_hash(g.user["password"],user["password"]):
            return "The password not correct", 400, None
        access_token = create_access_token({"user":g.user["username"],"type":g.user["userType"]})
        # refresh_token = create_refresh_token(g.user["username"])

        return {
                "message": "Logged in",
                "access_token": access_token
                 }, 200, None