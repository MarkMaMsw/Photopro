import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.like import Like  # noqa: E501
from swagger_server.models.search import Search  # noqa: E501
from swagger_server import util


def bestsell_photo():  # noqa: E501
    """return bestsell photo

    N # noqa: E501


    :rtype: List[Image]
    """
    return 'do some magic!'


def get_image_by_keyword(body=None):  # noqa: E501
    """return default display photo/search image using keyword

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: List[Image]
    """
    if connexion.request.is_json:
        body = Search.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def image_comment(body=None):  # noqa: E501
    """comment an image

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        body = Comment.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def image_detail(imageID):  # noqa: E501
    """return image detail

    N # noqa: E501

    :param imageID: image ID
    :type imageID: str

    :rtype: Image
    """
    return 'do some magic!'


def image_like(body=None):  # noqa: E501
    """like an image

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        body = Like.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def image_update(imageID, body):  # noqa: E501
    """update image detail

    N # noqa: E501

    :param imageID: image ID
    :type imageID: str
    :param body: 
    :type body: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        body = Image.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def image_upload(body=None):  # noqa: E501
    """upload image

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        body = Image.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def topcomment_photo():  # noqa: E501
    """return topcomment photo

    N # noqa: E501


    :rtype: List[Image]
    """
    return 'do some magic!'


def toplike_photo():  # noqa: E501
    """return toplike photo

    N # noqa: E501


    :rtype: List[Image]
    """
    return 'do some magic!'
