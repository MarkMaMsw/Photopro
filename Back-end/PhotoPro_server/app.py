from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_jwt_extended import JWTManager

from login import AuthLogin
from register import AuthRegister
from contributorServices.contributor import ContributorInfo
from imageServices.imageUpload import ImageUpload
from imageServices.imageDetail import ImageDetail
from imageServices.imageFile import ImageFile

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}}, send_wildcard=True)

# app.config.from_object(DEVConfig)
app.config['JWT_SECRET_KEY'] = 'jwt is secret'
jwt = JWTManager(app)

# use http://127.0.0.1:5000/docs/api/ to see API document
app.config['RESTFUL_API_DOC_EXCLUDE'] = []

restful_api = Api(app)

file_store = 'upload/'
app.config['UPLOAD_FOLDER'] = file_store

# loginService
restful_api.add_resource(AuthRegister, '/register')
restful_api.add_resource(AuthLogin, '/login')
restful_api.add_resource(ImageDetail, '/image/<string:imageId>')
restful_api.add_resource(ImageUpload, '/image')
restful_api.add_resource(ImageFile, '/image/file/<string:imageName>')
restful_api.add_resource(ContributorInfo, '/contributor')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)