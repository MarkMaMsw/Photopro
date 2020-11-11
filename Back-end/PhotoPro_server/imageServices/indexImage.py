from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import imageServices.imageDetail as imageDetail
class IndexImage(Resource):
    def get_detail_from_db(self):
        imageList = []
        images = db.db.image.find({'status': 'on_shop'})
        for i in images:
            tem_image = imageDetail.get_image_detail_from_db(i['image_id'])
            imageList.append(tem_image)
        imageList = sorted(imageList,key = lambda x: x["like_num"],reverse=True)
        return imageList[:12]
    #get image detail
    def get(self):
        all_image = self.get_detail_from_db()
        return all_image, 200, None