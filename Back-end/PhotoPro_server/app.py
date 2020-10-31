from flask import Flask, g
from flask_cors import CORS
from flask_restful import Api
from flask_jwt_extended import JWTManager

from auth.login import AuthLogin
from auth.register import AuthRegister
from contributorServices.contributor import ContributorInfo
from contributorServices.contributorImage import ContributorImage
from imageServices.imageUpload import ImageUpload
from imageServices.imageDetail import ImageDetail
from imageServices.imageFile import ImageFile
from imageServices.indexImage import IndexImage
from explorerServices.explorerInfo import ExplorerInfo
from imageServices.imageComment import PostImageComment
from imageServices.imageComment import GetImageComment
from imageServices.imageLike import PostImageLike
from imageServices.imageLike import GetImageLike
from imageServices.imageCollection import ImageCollection

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}}, send_wildcard=True)

# app.config.from_object(DEVConfig)
app.config['JWT_SECRET_KEY'] = 'jwt is secret'
jwt = JWTManager(app)

# use http://127.0.0.1:5000/docs/api/ to see API document
app.config['RESTFUL_API_DOC_EXCLUDE'] = []
restful_api = Api(app)


# loginService
restful_api.add_resource(AuthRegister, '/register')
restful_api.add_resource(AuthLogin, '/login')
restful_api.add_resource(ImageDetail, '/image/detail/<string:imageId>')
restful_api.add_resource(PostImageComment, '/image/comment')
restful_api.add_resource(GetImageComment, '/image/comment/<string:imageId>')
restful_api.add_resource(ImageUpload, '/image')
restful_api.add_resource(ImageFile, '/image/file/<string:imageName>')
restful_api.add_resource(PostImageLike, '/image/like')
restful_api.add_resource(GetImageLike, '/image/like/<string:imageId>')
restful_api.add_resource(ImageCollection, '/image/collection')
restful_api.add_resource(ContributorInfo, '/contributor')
restful_api.add_resource(ExplorerInfo, '/explorerInfo')
restful_api.add_resource(ContributorImage, '/contributor/image/<string:contributorId>')
restful_api.add_resource(IndexImage, '/index')


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)