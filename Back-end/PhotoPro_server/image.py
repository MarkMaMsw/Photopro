from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
class File(Resource):
    def get(self,imageName):
        fileName = "upload/" + imageName
        return send_file(fileName, mimetype='image/gif')
class Image(Resource):
    @jwt_required
    def post(self):
        f = request.files['file']
        image_title = request.form['title']
        image_price = request.form['price']
        image_status = request.form['status']
        image_tag = request.form['tag']
        image_filename = secure_filename(f.filename)
        contributer_id = get_raw_jwt()["identity"]["id"]
        file_store_path = 'upload/'
        image_id = int(time.time())
        if not os.path.exists(file_store_path):
            os.mkdir(file_store_path)
        f.save(os.path.join(file_store_path, image_filename))
        image_detail = {
            'image_id' : image_id,
            'contributer_id' : contributer_id,
            'title' : image_title,
            'price' : image_price,
            'status' : image_status,
            'tag' : image_tag,
            'image_name' : image_filename
        }
        db.db.image.insert_one(image_detail)
        return [], 200, None

class ImageGetimage(Resource):
    @jwt_required
    def get(self):
        print(get_raw_jwt()["identity"]["id"])
        return [], 200, None

