FROM nginx:latest

WORKDIR /usr/src/app

FROM node:10

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]