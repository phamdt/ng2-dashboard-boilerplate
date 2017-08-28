FROM node:8.0.0
MAINTAINER danny pham

ADD . /usr/src
WORKDIR /usr/src
RUN ls -althr
RUN npm install

CMD npm run serve

EXPOSE 3001

