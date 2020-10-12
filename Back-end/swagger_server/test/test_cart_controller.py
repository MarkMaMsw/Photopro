# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.cart import Cart  # noqa: E501
from swagger_server.models.order import Order  # noqa: E501
from swagger_server.test import BaseTestCase


class TestCartController(BaseTestCase):
    """CartController integration test stubs"""

    def test_get_all_image_of_user(self):
        """Test case for get_all_image_of_user

        add image into a cart
        """
        body = Order()
        response = self.client.open(
            '/v1/user/cart',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_all_imageof_crat(self):
        """Test case for get_all_imageof_crat

        get all image in a cart
        """
        response = self.client.open(
            '/v1/user/cart',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
