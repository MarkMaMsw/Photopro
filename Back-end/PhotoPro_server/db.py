from flask import Flask
from flask_pymongo import pymongo
# from app import app
CONNECTION_STRING = "mongodb+srv://COMP9900_group:comp9900@cluster0.okzv2.mongodb.net/<dbname>?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_mongodb_atlas')
user_collection = pymongo.collection.Collection(db, 'user')
image_collection = pymongo.collection.Collection(db, 'image')
comment_collection = pymongo.collection.Collection(db, 'comment')
like_collection = pymongo.collection.Collection(db, 'like')
shoppingcart_collection = pymongo.collection.Collection(db, 'shoppingcart')