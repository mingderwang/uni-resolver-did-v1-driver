FROM node:10.15

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

CMD [ "npm", "start" ]
EXPOSE 8080
