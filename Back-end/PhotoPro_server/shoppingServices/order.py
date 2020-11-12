from flask import request, g, send_file
import os
from flask_restful import Resource
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from werkzeug.utils import secure_filename
import db
import time
import dev.config as config
import imageServices.imageDetail as ImageDetail
import userServices.userInfo as userInfo
import time
def add_balance_contributor(contributor_id,money):
    contributor = userInfo.get_user_info(contributor_id)
    now_balance = contributor["balance"]
    now_balance = now_balance + int(money)
    update = db.db.user.update_one({"id":contributor_id},{"$set": { "balance": now_balance }})

def reduce_balance_explorer(explorer_id,money):
    contributor = userInfo.get_user_info(explorer_id)
    now_balance = contributor["balance"]
    now_balance = now_balance - int(money)
    update = db.db.user.update_one({"id":explorer_id},{"$set": { "balance": now_balance }})

def remove_from_shopping_cart(explorer_id,image_id):
    update = db.db.shoppingcart.update_one({"explorer_id":explorer_id,"image_id":image_id,"status":"on"},{"$set": { "status": "off" }})
class Order(Resource):
    #upload image
    @jwt_required
    def post(self):
        #print(request.json)
        #return [], 200, None
        try:
            if get_raw_jwt()["identity"]["type"] != 'explorer':
                result = {'status':'you are not explorer'}
                return result, 403, None
            explorer_id = get_raw_jwt()["identity"]["id"]
            input_data = request.json
            order_image = input_data["image"]
            total_price = 0
            order_result = []
            explorer = userInfo.get_user_info(explorer_id)
            #get total price
            for i in order_image:
                image = db.db.image.find_one({"image_id":i})
                #print(i)
                if image:
                    total_price = total_price + int(image["price"])
                    tem_order = {
                        "image_id" : image['image_id'],
                        "contributor_id" : image['contributor_id'],
                        "explorer_id" : explorer_id,
                        "image_price" : image['price']
                    }
                    order_result.append(tem_order)
                else:
                    return 'error', 409, None

            if explorer['balance'] - total_price < 0:
                return "balance not enought", 410, None
            #remove from shopping cart
            try:
                for i in order_result:
                    #print(i)
                    remove_from_shopping_cart(i['explorer_id'],i['image_id'])
                    #print(1)
                    reduce_balance_explorer(i['explorer_id'],i['image_price'])
                    #print(2)
                    add_balance_contributor(i['contributor_id'],i['image_price'])
                    #print(3)
                    i["order_time"] = str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
                    db.db.order.insert_one(i)
                return 'finish order', 200, None
            except:
                return 'cannot finish your order, try again', 409, None
        except:
            return 'not know error', 410, None

            


