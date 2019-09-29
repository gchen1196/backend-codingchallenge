# Backend Coding Challenge

## About
A RESTful API for a User's Github Repos 

## Tech Used
Node.js, Express, PostgreSQL, Sequelize, Axios 

## Table of Contents
1. [Set Up](#Set-Up)
1. [Run Project](#Run-Project)
1. [API Documentation](#API-Documentation)

## Set Up 

1. Connect to local PostgreSQL shell
  * `psql`
1. Create database in PostgreSQL shell 
  * `CREATE DATABASE backend_codingchallenge;`

## Run Project

1. Create a Personal Token on Github: https://github.com/settings/tokens
1. Add Personal Token in **config.example.js** file 
1. Rename **config.example.js** file to **config.js**
1. Install dependencies: 
  * `npm install`
1. Start server: 
  * `npm run start`

## API Documentation 

### Repo Object 
| name | type | description |
| --- | --- | --- |
| id | Number | Repo ID |
| name | String | Name of Repo |
| description | String | Description of Repo |
| language | String | Language of Repo |
| forks | Number | Number of forks |
| createdAt | String | time stamp |
| updatedAt | String | time stamp |

### Get list of all repos
#### Endpoint
`GET /` 
#### Reponse (200)
| name | type | description |
| --- | --- | --- |
| repos | Array | Array of [Repo Objects](#Repo-Object) |
#### Reponse (404)

### Search for Repos by parameters
#### Endpoint
`GET /?param=`
#### Params
| name | type | description |
| --- | --- | --- |
| language | String | find by language of repo |
| name | String | find by name of repo |
#### Response (200)
| name | type | description |
| --- | --- | --- |
| repos | Array | Array of [Repo Objects](#Repo-Object) |
#### Reponse (404)

### Update a Repo by ID
#### Endpoint
`PUT /repo/?id=`
#### Params
| name | type | description |
| --- | --- | --- |
| id | Number | Repo ID |
#### Request Body - Input data to update 
| name | type | description |
| --- | --- | --- |
| name | String | new Repo name |
| description | String | new Description of Repo |
| language | String | new Language of Repo |
| forks | Number | new Number of forks |
#### Response (201)
| name | type | description |
| --- | --- | --- |
| repo | Array of Object | Updated [Repo Object](#Repo-Object) |
#### Response (400)