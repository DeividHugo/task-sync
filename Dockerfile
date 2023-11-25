FROM node:20.5.0-alpine

RUN mkdir /usr/source

WORKDIR /usr/source

COPY ./source ./

RUN npm install

CMD ["node", "app.js"]