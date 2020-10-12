# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.collection import Collection  # noqa: E501
from swagger_server.models.image import Image  # noqa: E501
from swagger_server.test import BaseTestCase


class TestCollectionController(BaseTestCase):
    """CollectionController integration test stubs"""

    def test_add_image_into_collection(self):
        """Test case for add_image_into_collection

        add an image into collection
        """
        body = Image()
        response = self.client.open(
            '/v1/user/collection/{collectionID}'.format(collectionID='collectionID_example'),
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_create_new_collection(self):
        """Test case for create_new_collection

        create new collection
        """
        body = Collection()
        response = self.client.open(
            '/v1/user/collection',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user_collection(self):
        """Test case for get_user_collection

        get all collection
        """
        response = self.client.open(
            '/v1/user/collection',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
