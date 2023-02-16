FROM node:14-alpine
WORKDIR /app

RUN apk update && apk add bash
ADD package.json package.json
ADD package-lock.json package-lock.json

RUN npm install --dev

ADD . /app

# your app should run in the port below
EXPOSE 7000

CMD ["npm", "run", "dev"]