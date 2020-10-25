# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function

from flask import request, g

from . import Resource
from .. import schemas


class UserCollectionCollectionid(Resource):

    def get(self, collectionID):

        return [], 200, None

    def post(self, collectionID):
        print(g.json)

        return None, 200, None