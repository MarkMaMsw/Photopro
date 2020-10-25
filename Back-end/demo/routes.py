# -*- coding: utf-8 -*-

###
### DO NOT CHANGE THIS FILE
### 
### The code is auto generated, your change will be overwritten by 
### code generating.
###
from __future__ import absolute_import

from .api.auth_login import AuthLogin
from .api.auth_register import AuthRegister
from .api.image_getImage import ImageGetimage
from .api.auth_logout import AuthLogout
from .api.image_toplike import ImageToplike
from .api.image_topcomment import ImageTopcomment
from .api.image_bestsell import ImageBestsell
from .api.image_detail_imageID import ImageDetailImageid
from .api.image import Image
from .api.image_like import ImageLike
from .api.image_comment import ImageComment
from .api.user_getCreater import UserGetcreater
from .api.user_toplike import UserToplike
from .api.user_topcomment import UserTopcomment
from .api.user_detail_userID import UserDetailUserid
from .api.user_image_userID import UserImageUserid
from .api.user_cart import UserCart
from .api.user_collection import UserCollection
from .api.user_collection_collectionID import UserCollectionCollectionid
from .api.order import Order
from .api.order_detail_orderID import OrderDetailOrderid
from .api.user_orders import UserOrders
from .api.user_likefromother import UserLikefromother
from .api.user_mylike import UserMylike
from .api.user_mycomment import UserMycomment
from .api.user_commentfromother import UserCommentfromother


routes = [
    dict(resource=AuthLogin, urls=['/auth/login'], endpoint='auth_login'),
    dict(resource=AuthRegister, urls=['/auth/register'], endpoint='auth_register'),
    dict(resource=ImageGetimage, urls=['/image/getImage'], endpoint='image_getImage'),
    dict(resource=AuthLogout, urls=['/auth/logout'], endpoint='auth_logout'),
    dict(resource=ImageToplike, urls=['/image/toplike'], endpoint='image_toplike'),
    dict(resource=ImageTopcomment, urls=['/image/topcomment'], endpoint='image_topcomment'),
    dict(resource=ImageBestsell, urls=['/image/bestsell'], endpoint='image_bestsell'),
    dict(resource=ImageDetailImageid, urls=['/image/detail/<imageID>'], endpoint='image_detail_imageID'),
    dict(resource=Image, urls=['/image'], endpoint='image'),
    dict(resource=ImageLike, urls=['/image/like'], endpoint='image_like'),
    dict(resource=ImageComment, urls=['/image/comment'], endpoint='image_comment'),
    dict(resource=UserGetcreater, urls=['/user/getCreater'], endpoint='user_getCreater'),
    dict(resource=UserToplike, urls=['/user/toplike'], endpoint='user_toplike'),
    dict(resource=UserTopcomment, urls=['/user/topcomment'], endpoint='user_topcomment'),
    dict(resource=UserDetailUserid, urls=['/user/detail/<userID>'], endpoint='user_detail_userID'),
    dict(resource=UserImageUserid, urls=['/user/image/<userID>'], endpoint='user_image_userID'),
    dict(resource=UserCart, urls=['/user/cart'], endpoint='user_cart'),
    dict(resource=UserCollection, urls=['/user/collection'], endpoint='user_collection'),
    dict(resource=UserCollectionCollectionid, urls=['/user/collection/<collectionID>'], endpoint='user_collection_collectionID'),
    dict(resource=Order, urls=['/order'], endpoint='order'),
    dict(resource=OrderDetailOrderid, urls=['/order/detail/<orderID>'], endpoint='order_detail_orderID'),
    dict(resource=UserOrders, urls=['/user/orders'], endpoint='user_orders'),
    dict(resource=UserLikefromother, urls=['/user/likefromother'], endpoint='user_likefromother'),
    dict(resource=UserMylike, urls=['/user/mylike'], endpoint='user_mylike'),
    dict(resource=UserMycomment, urls=['/user/mycomment'], endpoint='user_mycomment'),
    dict(resource=UserCommentfromother, urls=['/user/commentfromother'], endpoint='user_commentfromother'),
]