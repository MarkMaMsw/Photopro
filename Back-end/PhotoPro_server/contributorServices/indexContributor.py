from flask import request, g
import db
from flask_restful import Resource
import json
import dev.config as config
import userServices.userInfo as userInfo
class IndexContributor(Resource):
    def get_detail_from_db(self):
        cons = db.db.user.find({"userType":"contributor"})
        contributors = {}
        for i in cons:
            temp = userInfo.get_user_info(i["id"])
            temp["like_sum"] = 0
            contributors[i["id"]]=temp
        like = db.db.like.find({"like_status":"active"})
        # print(like)
        for i in like:
            # print(i)
            i.pop("_id")
            image = db.db.image.find_one({"image_id":i["image_id"]})
            # print(image)
            if image != None:
                author = db.db.user.find_one({"id":image["contributor_id"]})
                # print(author)
                author = userInfo.get_user_info(author["id"])
                contributors[author["id"]]["like_sum"]+=1
                    
                # print(contributors)
        conList = []
        for key,value in contributors.items():
            conList.append(value)
        # print(conList)
        conList = sorted(conList,key = lambda x: x["like_sum"],reverse=True)
        print(conList)
        contriList = []
        for i in conList:
            contriList.append(userInfo.get_user_info(i["id"]))
        # print(contriList)
        return contriList[:12]

    #get image detail
    def get(self):
        all_image = self.get_detail_from_db()
        return all_image, 200, None