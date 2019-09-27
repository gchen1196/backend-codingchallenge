# BackEnd Coding Challenge

## About
A RESTful API for a User's Github Repos 

## Tech Used
Node.js, Express, PostgreSQL, Sequelize, Axios 

## How to Set Up and Start 
- In terminal, connect to local postgres: psql
- Create a database in postgres shell: CREATE DATASE backend_codingchallenge; 
- Check to see if database is created: \list

-  In the backend-codingchallenge directory run: 
  - npm install
  - npm run start

## API Documentation 

### GET: localhost:3005/ 
  - Retrieves all repos 
  - Parameters: none
  - Response (200): 
    [
      {
        "id": 16303023,
        "name": "bistro",
        "description": "Bistro is a flexible distributed scheduler, a high-performance framework supporting multiple paradigms while retaining ease of configuration, management, and monitoring.",
        "language": "C++",
        "forks": 105,
        "createdAt": "2019-09-27T02:16:57.221Z",
        "updatedAt": "2019-09-27T02:16:57.221Z"
      },
      {
        "id": 53982677,
        "name": "BridgeIC",
        "description": "Firmware for BridgeIC functionality for 1S servers for YosemitePlatform",
        "language": "Shell",
        "forks": 17,
        "createdAt": "2019-09-27T02:16:57.221Z",
        "updatedAt": "2019-09-27T02:16:57.221Z"
      }
    ]
  - Reponse (400)

### GET: localhost:3005/?param=
  - Search for a Repos by parameters
  - Parameters:
    - name: name of the repo (String) ex. ToDoList
    - language: the language of the repo (String) ex. JavaScript
  - Request: localhost:3005/?language=JavaScript
  - Response (200): 
    [
      {
        "id": 63537249,
        "name": "create-react-app",
        "description": "Set up a modern web app by running one command.",
        "language": "JavaScript",
        "forks": 16692,
        "createdAt": "2019-09-27T02:16:57.221Z",
        "updatedAt": "2019-09-27T02:16:57.221Z"
      },
      {
        "id": 94911145,
        "name": "docusaurus",
        "description": "Easy to maintain open source documentation websites.",
        "language": "JavaScript",
        "forks": 1245,
        "createdAt": "2019-09-27T02:16:57.221Z",
        "updatedAt": "2019-09-27T02:16:57.221Z"
      }
    ] 
  - Response (400)

### PUT: localhost:3005/repo/?id=
  - Dynamically update a Repo by ID
  - Parameters: 
    - id: id of the Repo (INTEGER) ex.124325
  - Request (Body): 
    - New data to update: JSON 
      ex. {
        "name": "NewRepoName",
        "language": "NewLanguage"
      }
  - Request: localhost:3005/repo/?id=63537249
  - Reponse (200): 
    [
      {
        "id": 63537249,
        "name": "NewRepoName",
        "description": "Set up a modern web app by running one command.",
        "language": "NewLanguage",
        "forks": 16692,
        "createdAt": "2019-09-27T02:16:57.221Z",
        "updatedAt": "2019-09-27T02:44:24.460Z"
      },
      {
        "id": 17075054,
        "name": "facebook-clang-plugins",
        "description": "Plugins to clang-analyzer and clang-frontend",
        "language": "C++",
        "forks": 79,
        "createdAt": "2019-09-27T02:16:57.221Z",
        "updatedAt": "2019-09-27T02:16:57.221Z"
      }
    ]
  - Reponse (400)



