# COMP9900 - Back end

## Backend code review guide
* PhotoPro_server
The code of backend server
* Requirements.txt
Backend code requirement
* Swagger.yaml
Backend API document
* PhotoPro_server/auth
code for login and register
* PhotoPro_server/contributorServices
Code for providing contributor services
* PhotoPro_server/dev
Backend system config
* PhotoPro_server/explorerServices
Code for providing explorer services
* PhotoPro_server/imageServices
Code for providing image services
* PhotoPro_server/searchServices
Code for providing search services
* PhotoPro_server/shoppingServices
Code for providing shopping services
* PhotoPro_server/upload
For storage upload image and other static document
* PhotoPro_server/userServices
Code for providing general user services
* PhotoPro_server/app.py
Backend entrance
* PhotoPro_server/db.py
Database setting
* PhotoPro_server/encrypt.py
Encrypt token
## Requirement:
Python 3.7+
Flask 1.1.2
Pymongo 3.11.0
## Install Step
Step1:
cd Back-end
Step2:
python3 -m pip install -r requirements.txt
Step3:
cd PhotoPro_server
Step4:
Modify the IP address and datebase address in dev/config.py file
Step5:
Python3 app.py
That backend will be run on port 5000