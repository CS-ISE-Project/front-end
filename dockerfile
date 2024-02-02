FROM node:20-bookworm-slim

WORKDIR /iseProjectFront
COPY package.json .


RUN npm install

COPY . ./

EXPOSE 3000

CMD npm start