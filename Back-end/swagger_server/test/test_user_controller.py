# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.like import Like  # noqa: E501
from swagger_server.models.order import Order  # noqa: E501
from swagger_server.models.search import Search  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_commentfromother(self):
        """Test case for commentfromother

        get commentfromother
        """
        response = self.client.open(
            '/v1/user/commentfromother',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_creator(self):
        """Test case for get_creator

        get default creater or search
        """
        body = Search()
        response = self.client.open(
            '/v1/user/getCreater',
            method='GET',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image_by_user_id(self):
        """Test case for get_image_by_user_id

        get all upload image of the user
        """
        response = self.client.open(
            '/v1/user/image/{userID}'.format(userID='userID_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image_of_collection(self):
        """Test case for get_image_of_collection

        get all image of one collection
        """
        response = self.client.open(
            '/v1/user/collection/{collectionID}'.format(collectionID='collectionID_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_like_from_other(self):
        """Test case for get_like_from_other

        get likefromother
        """
        response = self.client.open(
            '/v1/user/likefromother',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_my_comment(self):
        """Test case for get_my_comment

        get mycomment
        """
        response = self.client.open(
            '/v1/user/mycomment',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_my_like(self):
        """Test case for get_my_like

        get mylike
        """
        response = self.client.open(
            '/v1/user/mylike',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_topcomment_creator(self):
        """Test case for get_topcomment_creator

        return topcomment creator
        """
        response = self.client.open(
            '/v1/user/topcomment',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_toplike_creators(self):
        """Test case for get_toplike_creators

        return toplike user
        """
        response = self.client.open(
            '/v1/user/toplike',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user_detail(self):
        """Test case for get_user_detail

        get user detail
        """
        response = self.client.open(
            '/v1/user/detail/{userID}'.format(userID='userID_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user_order_list(self):
        """Test case for get_user_order_list

        get order list
        """
        response = self.client.open(
            '/v1/user/orders',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_user_detail(self):
        """Test case for update_user_detail

        update user detail
        """
        body = User()
        response = self.client.open(
            '/v1/user/detail/{userID}'.format(userID='userID_example'),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
