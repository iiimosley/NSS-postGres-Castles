# PostGreSQL API -- Sandcastles

### Initial Setup
+ After loading PostgreSQL with your local client, initialize PostgreSQL in a new window of your terminal
+ Create and connect to the database for the API with the following commands:
```
username=# CREATE DATABASE sandcastledb

username=# \c sandcastledb
```
+ Create the database by running the following command (root directory of repository; outside of the PostGreSQL shell):
```
$ node buildDB.js
```
+ Run the following command to initialize the server listener:
```
$ nodemon app.js
``` 
+ Open the browser to `localhost:3000` or wherever you set your port

### API
+ To view all beaches
```
localhost:3000/beaches
```
+ To view a beach by id
```
localhost:3000/beaches/<#id>
```
+ To view all lifeguards
```
localhost:3000/lifeguards
```
+ To view a lifeguard by id
```
localhost:3000/lifeguards/<#id>
```
+ To view all sandcastles
```
localhost:3000/sandcastles
```
+ To view a sandcastle by id
```
localhost:3000/sandcastles/<#id>
```
+ To view all tools
```
localhost:3000/tools
```
+ To view a tool by id
```
localhost:3000/tools/<#id>
```