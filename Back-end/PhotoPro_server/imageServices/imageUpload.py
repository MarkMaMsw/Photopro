from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
class ImageUpload(Resource):
    #upload image
    @jwt_required
    def post(self):
        #get image detail from form
        f = request.files['file']
        image_title = request.form['title']
        image_price = request.form['price']
        image_status = request.form['status']
        image_tag = request.form['tag']
        #rename image file
        image_filename = secure_filename(f.filename)
        ext = image_filename.rsplit('.',1)[1]
        image_id = str(int(time.time()))
        image_newfilename = str(image_id) + '.' + ext
        #get contributor id
        contributer_id = get_raw_jwt()["identity"]["id"]
        file_store_path = 'upload/'
        #save file
        if not os.path.exists(file_store_path):
            os.mkdir(file_store_path)
        f.save(os.path.join(file_store_path, image_newfilename))
        #insert in database
        image_detail = {
            'image_id' : image_id,
            'contributer_id' : contributer_id,
            'title' : image_title,
            'price' : image_price,
            'status' : image_status,
            'tag' : image_tag,
            'image_name' : image_newfilename
        }
        db.db.image.insert_one(image_detail)
        result = {'status':'upload success'}
        return result, 200, None