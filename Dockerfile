FROM node:0.12.6
MAINTAINER sunhaibin "sunhaibin@goyoo.com"
WORKDIR /dockerone-crawler-cms
EXPOSE 3000
ADD . /dockerone-crawler-cms
CMD npm start
