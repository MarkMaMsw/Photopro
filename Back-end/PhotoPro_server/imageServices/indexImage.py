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
        # print(like)
        for i in images:
            # print(i)
            i.pop("_id")
            i["like_sum"] = db.db.like.find({"image_id":i["image_id"]}).count()
            imageList.append(i)
        imageList = sorted(imageList,key = lambda x: x["like_sum"],reverse=True)
        imageArray = []
        # print(imageList[:12])
        for i in imageList:
            i.pop("like_sum")
            imageArray.append(i)
        return imageArray[:12]
    #get image detail
    def get(self):
        all_image = self.get_detail_from_db()
        return all_image, 200, None