from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt
import imageServices.imageDetail as ImageDetail
import userServices.userInfo as userInfo
class ExplorerOrder(Resource):
    def get_explorer_order(self,explorer_id):
        order_image = db.db.order.find({"explorer_id":explorer_id})
        result = []
        for c in order_image:
            image_detail = ImageDetail.get_image_detail_from_db(c['image_id'])
            tem_result = {
                "image" : image_detail,
                "order_price" : c["image_price"],
                "time" : c["order_time"]
            }
            result.append(tem_result)
        return result
    @jwt_required
    def get(self):
        explorer_id = get_raw_jwt()["identity"]["id"]
        order = self.get_explorer_order(explorer_id)
        return order, 200, None
