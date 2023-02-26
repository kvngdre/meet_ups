FROM node:18.12.1-alpine3.17

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

ENV NODE_ENV=development

EXPOSE 8787

ENTRYPOINT ["npm", "run", "dev"]