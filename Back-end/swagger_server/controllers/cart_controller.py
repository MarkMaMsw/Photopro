import connexion
import six

from swagger_server.models.cart import Cart  # noqa: E501
from swagger_server.models.order import Order  # noqa: E501
from swagger_server import util


def get_all_image_of_user(body=None):  # noqa: E501
    """add image into a cart

    ZH # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Order.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_all_imageof_crat():  # noqa: E501
    """get all image in a cart

    ZH # noqa: E501


    :rtype: Cart
    """
    return 'do some magic!'
