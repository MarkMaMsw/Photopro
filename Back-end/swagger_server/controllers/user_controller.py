import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.like import Like  # noqa: E501
from swagger_server.models.order import Order  # noqa: E501
from swagger_server.models.search import Search  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def commentfromother():  # noqa: E501
    """get commentfromother

    ZH # noqa: E501


    :rtype: List[Comment]
    """
    return 'do some magic!'


def get_creator(body=None):  # noqa: E501
    """get default creater or search

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: List[User]
    """
    if connexion.request.is_json:
        body = Search.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_image_by_user_id(userID):  # noqa: E501
    """get all upload image of the user

    ZH # noqa: E501

    :param userID: ID of user
    :type userID: str

    :rtype: List[Image]
    """
    return 'do some magic!'


def get_image_of_collection(collectionID):  # noqa: E501
    """get all image of one collection

    ZH # noqa: E501

    :param collectionID: ID of collection
    :type collectionID: str

    :rtype: List[Image]
    """
    return 'do some magic!'


def get_like_from_other():  # noqa: E501
    """get likefromother

    ZH # noqa: E501


    :rtype: List[Like]
    """
    return 'do some magic!'


def get_my_comment():  # noqa: E501
    """get mycomment

    ZH # noqa: E501


    :rtype: List[Comment]
    """
    return 'do some magic!'


def get_my_like():  # noqa: E501
    """get mylike

    ZH # noqa: E501


    :rtype: List[Like]
    """
    return 'do some magic!'


def get_topcomment_creator():  # noqa: E501
    """return topcomment creator

    N # noqa: E501


    :rtype: List[User]
    """
    return 'do some magic!'


def get_toplike_creators():  # noqa: E501
    """return toplike user

    N # noqa: E501


    :rtype: List[User]
    """
    return 'do some magic!'


def get_user_detail(userID):  # noqa: E501
    """get user detail

    ZH # noqa: E501

    :param userID: ID of user
    :type userID: str

    :rtype: User
    """
    return 'do some magic!'


def get_user_order_list():  # noqa: E501
    """get order list

    ZH # noqa: E501


    :rtype: List[Order]
    """
    return 'do some magic!'


def update_user_detail(userID, body=None):  # noqa: E501
    """update user detail

    ZH # noqa: E501

    :param userID: ID of user
    :type userID: str
    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
