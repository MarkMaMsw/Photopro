from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import imageServices.imageDetail as imageDetail
import re
import userServices.userInfo as userInfo
class searchImage(Resource):
    def get_image_detail_from_db(self,search_keyword):
        image_tag = db.db.image.find({'tag':re.compile(search_keyword),'status':"on_shop"})
        image_title = db.db.image.find({'title':re.compile(search_keyword),'status':"on_shop"})
        result = []
        for i in image_tag:
            tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
            result.append(tem_result)
        for i in image_title:
            tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
            result.append(tem_result)
        return result
    def get_contributor_detail_from_db(self,search_keyword):
        contributor_username = db.db.user.find({'username':re.compile(search_keyword)})
        contributor_description = db.db.user.find({'description':re.compile(search_keyword)})
        result = []
        for i in contributor_username:
            tem_result = userInfo.get_user_info(i['id'])
            result.append(tem_result)
        for i in contributor_description:
            tem_result = userInfo.get_user_info(i['id'])
            result.append(tem_result)
        return result
    #get image detail
    def post(self):
        search = request.json
        search_type = search['type']
        search_keyword = search['keyword']
        if search_type == 'image':
            result = {
                'search_type' : 'image',
                'result' : self.get_image_detail_from_db(search_keyword)
                }
        elif search_type == 'contributor':
            result = {
                'search_type' : 'contributor',
                'result' : self.get_contributor_detail_from_db(search_keyword)
                }
        else:
            return 'search type error', 409, None
        return result, 200, None