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
from .api.contributer import Contributer
from .api.contributer_toplike import ContributerToplike
from .api.contributer_topcomment import ContributerTopcomment
from .api.contributer_detail_userID import ContributerDetailUserid
from .api.exploiter_detail_userID import ExploiterDetailUserid
from .api.contributer_image_userID import ContributerImageUserid
from .api.exploiter_collection import ExploiterCollection
from .api.exploiter_collection_collectionID import ExploiterCollectionCollectionid
from .api.order import Order
from .api.order_detail_orderID import OrderDetailOrderid
from .api.exploiter_orders import ExploiterOrders
from .api.contributer_likefromother import ContributerLikefromother
from .api.exploiter_mylike import ExploiterMylike
from .api.exploiter_mycomment import ExploiterMycomment
from .api.contributer_commentfromother import ContributerCommentfromother


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
    dict(resource=Contributer, urls=['/contributer'], endpoint='contributer'),
    dict(resource=ContributerToplike, urls=['/contributer/toplike'], endpoint='contributer_toplike'),
    dict(resource=ContributerTopcomment, urls=['/contributer/topcomment'], endpoint='contributer_topcomment'),
    dict(resource=ContributerDetailUserid, urls=['/contributer/detail/<userID>'], endpoint='contributer_detail_userID'),
    dict(resource=ExploiterDetailUserid, urls=['/exploiter/detail/<userID>'], endpoint='exploiter_detail_userID'),
    dict(resource=ContributerImageUserid, urls=['/contributer/image/<userID>'], endpoint='contributer_image_userID'),
    dict(resource=ExploiterCollection, urls=['/exploiter/collection'], endpoint='exploiter_collection'),
    dict(resource=ExploiterCollectionCollectionid, urls=['/exploiter/collection/<collectionID>'], endpoint='exploiter_collection_collectionID'),
    dict(resource=Order, urls=['/order'], endpoint='order'),
    dict(resource=OrderDetailOrderid, urls=['/order/detail/<orderID>'], endpoint='order_detail_orderID'),
    dict(resource=ExploiterOrders, urls=['/exploiter/orders'], endpoint='exploiter_orders'),
    dict(resource=ContributerLikefromother, urls=['/contributer/likefromother'], endpoint='contributer_likefromother'),
    dict(resource=ExploiterMylike, urls=['/exploiter/mylike'], endpoint='exploiter_mylike'),
    dict(resource=ExploiterMycomment, urls=['/exploiter/mycomment'], endpoint='exploiter_mycomment'),
    dict(resource=ContributerCommentfromother, urls=['/contributer/commentfromother'], endpoint='contributer_commentfromother'),
]