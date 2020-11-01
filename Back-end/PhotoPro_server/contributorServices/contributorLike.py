from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
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
            explorer = db.db.user.find_one({"id":l['explorer_id']})
            tem_result = {
                'explorer_name' : explorer['username'],
                'explorer_id' : l['explorer_id'],
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