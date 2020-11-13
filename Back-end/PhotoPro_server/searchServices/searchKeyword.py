from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import imageServices.imageDetail as imageDetail
import re
import userServices.userInfo as userInfo
from functools import reduce
def get_image_detail_from_db(search_keyword):
    image_tag = db.db.image.find({'tag':re.compile(search_keyword),'status':"on_shop"})
    image_title = db.db.image.find({'title':re.compile(search_keyword),'status':"on_shop"})
    result = []
    for i in image_tag:
        tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
        result.append(tem_result)
    for i in image_title:
        tem_result = imageDetail.get_image_detail_from_db(i['image_id'])
        result.append(tem_result)
    result = reduce(lambda x, y: x if y in x else x + [y], [[], ] + result)
    return result
def get_contributor_detail_from_db(search_keyword):
    contributor_username = db.db.user.find({'username':re.compile(search_keyword)})
    contributor_description = db.db.user.find({'description':re.compile(search_keyword)})
    result = []
    for i in contributor_username:
        tem_result = userInfo.get_user_info(i['id'])
        result.append(tem_result)
    for i in contributor_description:
        tem_result = userInfo.get_user_info(i['id'])
        result.append(tem_result)
    result = reduce(lambda x, y: x if y in x else x + [y], [[], ] + result)
    return result
class searchImage(Resource):

    #get image detail
    def post(self):
        try:
            search = request.json
            search_type = search['type']
            search_keyword = search['keyword']
            explorer_id = search['explorer_id']
        except:
            return "miss some data", 409, None
        if search_type == 'image':
            result = {
                'search_type' : 'image',
                'result' : get_image_detail_from_db(search_keyword)
                }
        elif search_type == 'contributor':
            result = {
                'search_type' : 'contributor',
                'result' : get_contributor_detail_from_db(search_keyword)
                }
        else:
            return 'search type error', 409, None
        db.db.search.insert_one({'search_type':search_type,'explorer_id':explorer_id,'search_keyword':search_keyword})
        return result, 200, None