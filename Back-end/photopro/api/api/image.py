# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function

from flask import request, g

from . import Resource
from .. import schemas
import os

class Image(Resource):

    def post(self):
        print(g.form)
        f = request.files['file']
        print(f.filename)
        print(str(os.path.abspath('.')))
        f.save(str(os.path.abspath('.')) + '/upload/'+f.filename)
        return [1], 200, None