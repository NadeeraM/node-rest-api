## Node Rest API

[![Build Status](https://travis-ci.com/NadeeraM/node-rest-api.svg?branch=master)](https://travis-ci.com/NadeeraM/node-rest-api)

Rest api, build with Nodejs. This application contains 3 APIs and runs on port 8080.

`/api/v1/details`
`/api/v1/health`
`/api/v1/metadata`

### Usage

Can run the application using `npm start`.

Can Run tests using `npm test`.

### Deploy application

Can bundle the application using `npm pac`.

if required can push bundle to some artifactory. 

Then copy bundle(.tgz) to application server and run `npm install rest-api-x.x.x.tgz`.

Then start application using `npm start`.


### risks associated with your application/deployment (answers to the question)

1. Apis are exposed and not secure, anyone can access. So Authentication and authorisation should enabled.
   Can use OpenID Connect(JWT) and OAuth2 for authentication and authorisation.
   
2. Application dependent libraries can have vulnerabilities. So have to check dependency vulnerabilities before deployment.

3. When copy artifact to application server should use ssh in order to securely deploy artifact.






