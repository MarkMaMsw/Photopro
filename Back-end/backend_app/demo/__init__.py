# -*- coding: utf-8 -*-
from __future__ import absolute_import

from flask import Flask
import json
import os
from api.routes import routes
from flask import Flask
from flask_restful import abort,Api
from flask_jwt_extended import JWTManager

# authorizations = {
#     'API Key': {
#         'type': 'apiKey',
#         'in': 'header',
#         'name': 'api_key'
#     },
# }

# User=v1.db.User
# routes = v1.routes

def create_app():
    app = Flask(__name__,static_folder='static')
    # app.register_blueprint(
    #     demo.db
    #     # ,url_prefix='/v1'
    # )

    # @app.route('/')
    # def flask_mongodb_atlas():
    #     return "flask mongodb atlas!"
    app.config['JWT_SECRET_KEY'] = 'jwt is secret'
    jwt = JWTManager(app)
    api = Api(app, 
            catch_all_404s=True)
            # security='API Key',
            # authorizations=authorizations)
    for route in routes:
        api.add_resource(route.pop('resource'), *route.pop('urls'), **route)
    return app

if __name__ == '__main__':
    create_app().run('0.0.0.0',debug=True)