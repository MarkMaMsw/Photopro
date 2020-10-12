import connexion
import six

from swagger_server.models.order import Order  # noqa: E501
from swagger_server import util


def get_order_detail(orderID):  # noqa: E501
    """get an order detail

    ZH # noqa: E501

    :param orderID: ID of Order
    :type orderID: str

    :rtype: Order
    """
    return 'do some magic!'


def order_created(body=None):  # noqa: E501
    """create an new order

    ZH # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Order.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
