FROM node:16-alpine 

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

COPY src/config/serviceAccountKey.json /usr/src/app/build/config/serviceAccountKey.json

CMD [ "node" , "build/server.js" ]