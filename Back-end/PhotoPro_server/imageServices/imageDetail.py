from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import userServices.userInfo as userInfo
def get_image_detail_from_db(image_id):
    image = db.db.image.find_one({"image_id":image_id})
    comment_num = db.db.comment.find({"image_id":image_id}).count()
    like_num = db.db.like.find({"image_id":image_id}).count()
    #print(comment_num)
    #print(like_num)
    contributor = userInfo.get_user_info(image['contributor_id'])
    #print(contributor)
    #print(type(imageId))
    #print(type(image))
    image_url = config.ip_address + config.image_file_url + image['image_name']
    result = {
        'image_id': image['image_id'], 
        'contributor_detail': contributor, 
        'title': image['title'], 
        'price': image['price'], 
        'status': image['status'], 
        'tag': image['tag'], 
        'image_name': image['image_name'],
        'image_url': image_url,
        'like_num' : like_num,
        'comment_num' : comment_num
    }
    return result
class ImageDetail(Resource):

    #get image detail
    def get(self,imageId):
        
        #image_id = int(imageId)
        result = get_image_detail_from_db(imageId)
        return result, 200, None