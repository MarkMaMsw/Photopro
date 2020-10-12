# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.models.like import Like  # noqa: E501
from swagger_server.models.search import Search  # noqa: E501
from swagger_server.test import BaseTestCase


class TestImageController(BaseTestCase):
    """ImageController integration test stubs"""

    def test_bestsell_photo(self):
        """Test case for bestsell_photo

        return bestsell photo
        """
        response = self.client.open(
            '/v1/image/bestsell',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_image_by_keyword(self):
        """Test case for get_image_by_keyword

        return default display photo/search image using keyword
        """
        body = Search()
        response = self.client.open(
            '/v1/image/getImage',
            method='GET',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_image_comment(self):
        """Test case for image_comment

        comment an image
        """
        body = Comment()
        response = self.client.open(
            '/v1/image/comment',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_image_detail(self):
        """Test case for image_detail

        return image detail
        """
        response = self.client.open(
            '/v1/image/detail/{imageID}'.format(imageID='imageID_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_image_like(self):
        """Test case for image_like

        like an image
        """
        body = Like()
        response = self.client.open(
            '/v1/image/like',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_image_update(self):
        """Test case for image_update

        update image detail
        """
        body = Image()
        response = self.client.open(
            '/v1/image/detail/{imageID}'.format(imageID='imageID_example'),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_image_upload(self):
        """Test case for image_upload

        upload image
        """
        body = Image()
        response = self.client.open(
            '/v1/image',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_topcomment_photo(self):
        """Test case for topcomment_photo

        return topcomment photo
        """
        response = self.client.open(
            '/v1/image/topcomment',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_toplike_photo(self):
        """Test case for toplike_photo

        return toplike photo
        """
        response = self.client.open(
            '/v1/image/toplike',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
