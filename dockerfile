
FROM node:latest


WORKDIR /coding12


COPY package*.json ./


RUN npm install


COPY . .

RUN npm run rollup


RUN npm run build-storybook


RUN npm install -g http-server


CMD ["http-server", "storybook-static", "-p 8083"]
