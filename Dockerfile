FROM node:12.18.1

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "start"]
