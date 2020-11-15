# COMP9900 - Front end

## Frontend code review guide
* Front-end/my-project
This is the root folder of application
* public/
The avatars and base html file are stored in this folder
* src/APP.js
The route infos are defined in this file
* src/index.js
The entry for the whole React project
* src/components
This folder holds the reusable components:
contributor: unique parts of contributor, such as component of posting image
explorer: unique parts of explorer, such as shopping cart component
reusable: small reusable components for page or image
api: specify backend ip address
* src/views/pages
Majority of page components and functional files are defined here:
author_detail: page for author details
explorerprofile: specify explorer profile page
profile: specify contributor profile page
register: page for signup
login: set login page
main: specify mainpage for explorers
page404: 404 page while inputting nonexistent url
## Requirement:
* Node.js v12.16.3
* Npm v6.14.5
* React 16.13.1
## Install Step
1. open Front-end/
cd my-project
2. install dependencies
npm install
3. modify the backend address in /my-project/src/components/api/url.js
If you access some 404 images, it denotes these images are not stored in the currently setting backend address. Maybe you should change the backend url in the url.js.
4. run this project using script
npm start
Then frontend will run on port 3000