<h3 align="center">
    <img alt="Instagram" src="https://pbs.twimg.com/profile_images/1126625068564402176/VV114FWs_400x400.png" width="90px" />
</h3>

<h1 align="center">
  [DigitalHouse] Bootcamp Challenge<br/>Instagram Clone
</h1>

<p align="center">
  [&nbsp;&nbsp;&nbsp;
  <a href="#about-the-project">About the Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;]
</p>

## About The Project

Instagram Clone (Both frontend and backend) created w/ NodeJS, Express, Sequelize and MySQL.

This repository is still under development and we'll continue to add more features to it.

## Features

 * Photo feed
 * Post photo 
   * Posts from gallery
 * Like posts
   * View all likes on a post
 * Comment on posts
   * View all comments on a post

<!---
 * Search for users
    * Search screen showing all images except your own
    * Search based on usernames
 * Profile Screen
   * Follow / Unfollow Users
   * Change image view from grid layout to feed layout
   * Edit profile
 * Chat Screen
    * Chat with any user
    * Share images while chatting 
-->

## Getting started

#### 1. [Setup MySQL Server](https://dev.mysql.com/downloads/)

NOTE: We're using a docker container for our tests [[official images](https://hub.docker.com/_/mysql)].

#### 2. [Setup NodeJS](https://nodejs.org/en/download/)

#### 3. Clone the repo

```sh
$ git clone https://github.com/renatokano/dh-fake-instagram
$ cd dh-fake-instagram
```

#### 4. Install the project dependencies

```sh
$ npm install
```

This command will install all project dependencies. 

NOTE: all of these packages will be placed in the `node_modules` folder.

#### 5. MySQL Schema

1. First of all, you'll need a MySQL database service. 
2. Once your MySQL service is ON, you just need a connection to run our [sql script](https://github.com/renatokano/dh-fake-instagram/blob/master/fake-instagram.sql). NOTE: Here, we can use a terminal and just connect/run the code, or we can use the MySQL Workbench Solution [[download](https://dev.mysql.com/downloads/workbench/)].
3. So, w/ all the tables created, set the sequelize [configuration](https://github.com/renatokano/dh-fake-instagram/blob/master/config/database.js) based on your MySQL service.

#### 6. Run the code

```sh
$ cd dh-fake-instagram
$ node app.js
```
and access the address (in your browser): 

```
http://127.0.0.1:3000
```
