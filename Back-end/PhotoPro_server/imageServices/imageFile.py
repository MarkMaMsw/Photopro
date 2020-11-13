from flask import request, g, send_file
from flask_restful import Resource
import os
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
class ImageFile(Resource):
    #get image file
    def get(self,imageName):
        fileName = "upload/" + imageName
        if not os.path.exists(fileName):
            fileName = "upload/static/404.png"
        return send_file(fileName, mimetype='image/gif')