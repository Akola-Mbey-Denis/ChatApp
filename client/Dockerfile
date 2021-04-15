FROM node:14
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /app

RUN yarn install 

COPY . .

EXPOSE 3000
CMD ["yarn", "run", "build"]