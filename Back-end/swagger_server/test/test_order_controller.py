# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.order import Order  # noqa: E501
from swagger_server.test import BaseTestCase


class TestOrderController(BaseTestCase):
    """OrderController integration test stubs"""

    def test_get_order_detail(self):
        """Test case for get_order_detail

        get an order detail
        """
        response = self.client.open(
            '/v1/order/detail/{orderID}'.format(orderID='orderID_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_order_created(self):
        """Test case for order_created

        create an new order
        """
        body = Order()
        response = self.client.open(
            '/v1/order',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
