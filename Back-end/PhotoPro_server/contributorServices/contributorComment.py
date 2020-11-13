from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
import userServices.userInfo as UserInfo
import imageServices.imageDetail as ImageDetail
class ContributorComment(Resource):
    def get_id_from_db(self,contributorId):
        image = db.db.image.find({"contributor_id":contributorId})
        result = []
        for i in image:
            result.append(i['image_id'])
        return result
    #get image detail
    def get_comment_from_db(self,image_id):
        comment = db.db.comment.find({'image_id':image_id})
        comment_result = []
        for c in comment:
            explorer_id = c['explorer_id']
            #print(explorer_id)
            explorer_detail = UserInfo.get_user_info(explorer_id)
            image_detail = ImageDetail.get_image_detail_from_db(c['image_id'])
            tem_result = {
                'explorer' : explorer_detail,
                'image' : image_detail,
                'comment_detail' : c['comment_detail'],
                'comment_time' : c['comment_time']
            }
            #print(tem_result)
            comment_result.append(tem_result)
        #print(comment_result)
        return comment_result
    def get_all_image_comment(self,all_image_id):
        all_result = []
        for i in all_image_id:
            tem_result = self.get_comment_from_db(i)
            all_result.extend(tem_result)
        return all_result

    @jwt_required
    def get(self):
        contributorId = get_raw_jwt()["identity"]["id"]
        all_image_id = self.get_id_from_db(contributorId)
        #print(all_image_id)
        all_comment = self.get_all_image_comment(all_image_id)
        return all_comment, 200, None