from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
import userServices.userInfo as UserInfo
import imageServices.imageDetail as ImageDetail
class ContributorLike(Resource):
    def get_id_from_db(self,contributorId):
        image = db.db.image.find({"contributor_id":contributorId})
        result = []
        for i in image:
            result.append(i['image_id'])
        return result
    #get image detail
    def get_like_from_db(self,image_id):
        like = db.db.like.find({'image_id':image_id})
        like_result = []
        for l in like:
            explorer_detail = UserInfo.get_user_info(l['explorer_id'])
            image_detail = ImageDetail.get_image_detail_from_db(l['image_id'])
            tem_result = {
                'explorer' : explorer_detail,
                'image' : image_detail,
                'like_status' : l['like_status'],
                'like_time' : l['like_time']
            }
            #print(tem_result)
            like_result.append(tem_result)
        #print(comment_result)
        return like_result
    def get_all_image_like(self,all_image_id):
        all_result = []
        for i in all_image_id:
            tem_result = self.get_like_from_db(i)
            all_result.extend(tem_result)
        return all_result

    @jwt_required
    def get(self):
        contributorId = get_raw_jwt()["identity"]["id"]
        all_image_id = self.get_id_from_db(contributorId)
        #print(all_image_id)
        all_like = self.get_all_image_like(all_image_id)
        return all_like, 200, None