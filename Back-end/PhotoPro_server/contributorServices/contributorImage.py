from flask import request, g
import db
from flask_restful import Resource
import json
class ImageDetail(Resource):
    #get image detail
    def get(self,contributorId):