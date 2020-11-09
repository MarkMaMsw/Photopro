from flask import Flask
from flask_pymongo import pymongo
import dev.config as config
# from app import app
CONNECTION_STRING = config.database_address
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_mongodb_atlas')
user_collection = pymongo.collection.Collection(db, 'user')
image_collection = pymongo.collection.Collection(db, 'image')
comment_collection = pymongo.collection.Collection(db, 'comment')
like_collection = pymongo.collection.Collection(db, 'like')
shoppingcart_collection = pymongo.collection.Collection(db, 'shoppingcart')
search_collection = pymongo.collection.Collection(db, 'search')