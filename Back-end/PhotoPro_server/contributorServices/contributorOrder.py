from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt
import imageServices.imageDetail as ImageDetail

class ContributorOrder(Resource):
    def get_contributor_order(self,contributor_id):
        order_image = db.db.order.find({"contributor_id":contributor_id})
        result = []
        for c in order_image:
            image_detail = ImageDetail.get_image_detail_from_db(c['image_id'])
            result.append(image_detail)
        return result
    @jwt_required
    def get(self):
        contributor_id = get_raw_jwt()["identity"]["id"]
        order = self.get_explorer_order(contributor_id)
        return order, 200, None
