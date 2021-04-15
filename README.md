# ChatApp

> A sample app made using React frontend and node backend (express) to build a chat app

![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)

## Table of Contents

- [Car For U](#car-for-u)
  - [Table of Contents](#table-of-contents)
  - [Clone](#clone)
 
  - [Setup](#setup)
  - [Docker Configuration](#docker-configuration)
  - [Features](#features)
  - [Tests](#tests)
  - [Created By](#created-by)
  - [FAQ](#faq)
  - [Support](#support)
  - [License](#license)

---

## Clone

- Clone this repo to your local machine using 

```shell
$ https://github.com/Akola-Mbey-Denis/ChatApp.git
```

---
 

## Setup

- Install all the Frontend and Backend dependencies.

> Backend

```shell
$ cd ChatApp
$ cd server
$ yarn install
```

> Frontend

```shell
$ cd ChatApp
$ cd client
$ yarn install
```

> To run the Node server and the client app server, `cd` into project root dir.

```shell
$ cd ChatApp
$ cd server
$ yarn run
```
This will serve both the backend and front end.

App is served on [`localhost:3000`](http://localhost:3000/).

Node server running on [`localhost:8007`](http://localhost:8007/).

The credentials to Login in the app -
First,you need to create an account using auth0. The react frontend provides a button to login,click on click,it will load the authO login page,choose to signup from there .
You can login with your username /email and password

- username - `signed up user`
- password - `signed up user`

---

## Docker Configuration

A docker compose file has been written.

Install Docker from [here](https://www.docker.com/products/docker-desktop)

To configure docker, perform the following steps - 

- Change the proxy in `server/package.json`

```json
"proxy" : "http://chatappbackend:8007"
```

- Build the images and start the containers

```shell
$ docker-compose up --build
```

---

 # Chatappbackend
 

This is a nodejs chat app using socket.io and mongodb (Atlas) .
The  app was deployed on heroku  it has the following end points
# users model api endpoints
-[create a user](https://aqueous-taiga-66714.herokuapp.com/api/v1/users/) using POST HTTPS request method

-[get a user](https://aqueous-taiga-66714.herokuapp.com/api/v1/users/:id) using GET HTTPs request method and a specified user ID 

-[delete a user](https://aqueous-taiga-66714.herokuapp.com/api/v1/users/:id) specified the id of the user and use DELETE HTTPS request method

-[get all users](https://aqueous-taiga-66714.herokuapp.com/api/v1/users/) using GET HTTPS request method

 # messages model api endpoints
 -[create a message](https://aqueous-taiga-66714.herokuapp.com/api/v1/messages/) using HTTPS POST request method and  with a specific message payload (sender_id,reciever_id,and the message)

 -[Get all messages](https://aqueous-taiga-66714.herokuapp.com/api/v1/messages/) using the HTTPS GET request method,it returns  all messages in the database.

 -[Get messages specific to two users](https://aqueous-taiga-66714.herokuapp.com/api/v1/messages/sender_id/receiver_id) using the HTTPS GET reuest method with specific sender and receiver ids.

 [Delete a message](https://aqueous-taiga-66714.herokuapp.com/api/v1/messages/message_id) using HTTPS DELETE method,it returns  deletes the specified message in the database. 
 

You can find a running version of the backend app at https://aqueous-taiga-66714.herokuapp.com!

Libraries used:

- [socket.io](https://github.com/socketio/socket.io) 
- [express](https://github.com/expressjs/express)
- [moongose](https://aqueous-taiga-66714.herokuapp.com)- 
- [Moment.js](https://github.com/moment/moment)
- [Auth0](https://auth0.com/)

# Running application
- Build the install docker and run the following commands:
- docker build -t chatappbackend .
- docker run -p 8007:8007 chatappbackend to run the application locally.
 
Thank you,

Denis Mbey Akola


  
