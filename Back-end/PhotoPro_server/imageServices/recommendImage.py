from flask import request, g

import db
import json
from flask_restful import Resource
from flask_jwt_extended import jwt_required,get_raw_jwt
import imageServices.imageDetail as imageDetail
from collections import Counter
import searchServices.searchKeyword as searchKeyword
class RecommendImage(Resource):
    @jwt_required
    def get(self):
        explorer_id = get_raw_jwt()["identity"]["id"]
        like = db.db.like.find({"explorer_id":explorer_id})
        search = db.db.search.find({"explorer_id":explorer_id})
        tag = ''
        for i in like:
            image_id = i["image_id"]
            try:
                image = imageDetail.get_image_detail_from_db(image_id)
                tag = tag + ',' + image["tag"]
            except:
                image = {"tag":""}
                tag = tag + ',' + image["tag"]
        for i in search:
            tag = tag + ',' + i["search_keyword"]
        tag_list = tag.split(',')
        tag_list = filter(None,tag_list)
        tag_list = Counter(tag_list)
        tag_list = sorted(tag_list.items(), key=lambda x: x[1], reverse=True)
        recommend_result = []
        for i in tag_list:
            tem_result = searchKeyword.get_image_detail_from_db(i[0])
            recommend_result.extend(tem_result)
        if len(recommend_result) < 12:
            tem_result = searchKeyword.get_image_detail_from_db('')
            tem_result = list(reversed(tem_result))
            recommend_result.extend(tem_result)
        return recommend_result[:12], 200, None