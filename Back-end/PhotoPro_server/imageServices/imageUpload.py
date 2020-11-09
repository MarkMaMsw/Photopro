from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
import dev.config as config
from PIL import Image, ImageDraw, ImageFont
class ImageUpload(Resource):
    #upload image
    @jwt_required
    def post(self):
        #get image detail from form
        #print(get_raw_jwt()["identity"])
        if get_raw_jwt()["identity"]["type"] != 'contributor':
                result = {'status':'you are not contributor'}
                return result, 403, None
        try:
            f = request.files['file']
            image_title = request.form['title']
            image_price = request.form['price']
            image_status = request.form['status']
            if image_status == "on_shop" or image_status == "off_shop":
                #nothing do here
                a = 1
            else:
                result = {'status':'upload status error'}
                return result, 409, None
            image_tag = request.form['tag']
        except:
            result = {'status':'upload error'}
            return result, 409, None
        #rename image file
        try:
            image_filename = secure_filename(f.filename)
            ext = image_filename.rsplit('.',1)[1]
            image_id = str(int(time.time()))
            image_newfilename = str(image_id) + '.' + ext
            #get contributor id
            contributer_id = get_raw_jwt()["identity"]["id"]
            file_store_path = config.image_upload_dir
            #save file
            if not os.path.exists(file_store_path):
                os.mkdir(file_store_path)
            f.save(os.path.join(file_store_path, image_newfilename))
            #add watermark
            img = Image.open(os.path.join(file_store_path, image_newfilename))
            watermark = Image.open(os.path.join('upload/static/', 'watermark.png'))
            r,g,b,a = watermark.split()
            img.convert("RGBA")
            bottomRight = (int(img.size[0]/2 - 150), int(img.size[1]/2))
            
            
            watermark.convert("RGBA")
            img.paste(watermark, bottomRight, mask=a)
            watermark_image_name = "watermark_" + image_newfilename
            img.save(os.path.join(file_store_path, watermark_image_name))
        except:
            result = {'status':'upload error'}
            return result, 409, None

        #insert in database
        image_detail = {
            'image_id' : image_id,
            'contributor_id' : contributer_id,
            'title' : image_title,
            'price' : image_price,
            'status' : image_status,
            'tag' : image_tag,
            'image_name' : watermark_image_name,
            'image_name_no_watermark' : image_newfilename
        }
        db.db.image.insert_one(image_detail)
        result = {'status':'upload success'}
        return result, 200, None
    @jwt_required
    def put(self):
        if get_raw_jwt()["identity"]["type"] != 'contributor':
                result = {'status':'you are not contributor'}
                return result, 403, None
        try:
            input_data = request.json
            image_id = input_data['image_id']
            image_status = input_data['image_status']
            if image_status == 'on_shop' or image_status == 'off_shop':
                update = db.db.image.update_one({"image_id":image_id},{"$set": { "status": image_status }})
                if update:
                    result = {'status':'update success'}
                    return result, 200, None
                else:
                    result = {'status':'record not found'}
                    return result, 404, None
            else:
                result = {'status':'update status error'}
                return result, 409, None
        except:
            result = {'status':'update error'}
            return result, 409, None