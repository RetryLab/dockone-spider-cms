FROM node:0.12.6
MAINTAINER sunhaibin "sunhaibin@goyoo.com"
RUN \
    rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime 
WORKDIR /dockerone-crawler-cms
ADD ./package.json /dockerone-crawler-cms/
RUN npm install
EXPOSE 3000
ADD . /dockerone-crawler-cms
CMD npm start