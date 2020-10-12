import connexion
import six

from swagger_server.models.body import Body  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def user_login(body=None):  # noqa: E501
    """user login

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        body = Body.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def user_logout():  # noqa: E501
    """user logout

    ZH # noqa: E501


    :rtype: None
    """
    return 'do some magic!'


def user_register(body=None):  # noqa: E501
    """for user register

    N # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: str
    """
    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
