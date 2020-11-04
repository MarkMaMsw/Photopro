from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import userServices.userInfo as userInfo
class IndexContributor(Resource):
    def get_detail_from_db(self):
        image = db.db.user.find()
        result = []
        for i in image:
            tem_result = userInfo.get_user_info(i['id'])
            result.append(tem_result)
        return result[-12:]
    #get image detail
    def get(self):
        all_image = self.get_detail_from_db()
        return all_image, 200, None