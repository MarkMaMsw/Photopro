from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt

def get_user_info(user_id):
    user = db.db.user.find_one({"id":user_id})
    if not user:
        return False
    attributes = ["username","email","description","balance","id","userType"]
    result = {}
    for i in attributes:
        result[i] = user[i]
    return result