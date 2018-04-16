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

## API
#### BEACHES
**GET:** To view all beaches
```
localhost:3000/beaches
```
**GET:** To view a beach by ID
```
localhost:3000/beaches/<#id>
```
  + Your returned data should be formatted like so...
  ```
  {
    "id": 2,
    "name": "PCB",
    "location": "Florida",
    "sand_rating": 2,
    "Lifeguards.name": "Kathryn Hahn"
  }
  ```
**POST:** To add a beach, send a POST request with your API tool (eg, Postman) to...
```
localhost:3000/beaches
```
  + with the following JSON formatted data
  ```
  {
      "name": "<name of beach, in quotes>",
      "location": "<name of state or country>",
      "sand_rating": <integer rating 1-10, no quotes>
  }
  ```
  + data returned should match this formatting
  ```
  {
    "id": 9,
    "name": "Homer",
    "location": "Alaska",
    "sand_rating": 5
  }
  ```

#### LIFEGUARDS
**GET:** To view all lifeguards
```
localhost:3000/lifeguards
```
**GET:** To view a lifeguard by ID
```
localhost:3000/lifeguards/<#id>
```
  + Your returned data should be formatted like so...
```
{
"id": 3,
"first_name": "Bobcat",
"last_name": "Golthwait",
"beach_id": 1,
"Beach.name": "Waikiki"
}
```
**POST:** To add a lifeguard, send a POST request with your API tool to...
```
localhost:3000/lifeguards
```
  + with the following JSON formatted data
  ```
  {
      "first_name": "<first name>",
      "last_name": "<last name>",
      "beach_id": <integer>   ///please check all @ .../beaches for accurate id's
  }
  ```
  + data returned should match this formatting
  ```
    {
    "id": 7,
    "first_name": "Jermaine",
    "last_name": "Clement",
    "beach_id": 3
    }
  ```

#### SANDCASTLES
**GET:** To view all sandcastles
```
localhost:3000/sandcastles
```
**GET:** To view a sandcastle by id
```
localhost:3000/sandcastles/<#id>
```

#### TOOLS
**GET:** To view all tools
```
localhost:3000/tools
```
**GET:** To view a tool by id
```
localhost:3000/tools/<#id>
```
