import connexion
import six

from swagger_server.models.collection import Collection  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server import util


def add_image_into_collection(collectionID, body=None):  # noqa: E501
    """add an image into collection

    ZH # noqa: E501

    :param collectionID: ID of collection
    :type collectionID: str
    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Image.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def create_new_collection(body=None):  # noqa: E501
    """create new collection

    ZH # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Collection.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_user_collection():  # noqa: E501
    """get all collection

    ZH # noqa: E501


    :rtype: List[Collection]
    """
    return 'do some magic!'
