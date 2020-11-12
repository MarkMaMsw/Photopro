from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt
import imageServices.imageDetail as ImageDetail
import userServices.userInfo as userInfo
class ContributorOrder(Resource):
    def get_contributor_order(self,contributor_id):
        order_image = db.db.order.find({"contributor_id":contributor_id})
        result = []
        for c in order_image:
            image_detail = ImageDetail.get_image_detail_from_db(c['image_id'])
            explorer_detail = userInfo.get_user_info(c['explorer_id'])
            tem_result = {
                "image" : image_detail,
                "order_price" : c["image_price"],
                "order_time" : c["order_time"],
                "explorer" : explorer_detail
            }
            result.append(tem_result)
        return result
    @jwt_required
    def get(self):
        contributor_id = get_raw_jwt()["identity"]["id"]
        order = self.get_contributor_order(contributor_id)
        return order, 200, None
