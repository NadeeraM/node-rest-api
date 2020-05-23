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

Can automate deployment by writing scrips to copy artifacts to the application server using ssh.


### Risks associated with your application/deployment (answers to the question)

1. APIs are exposed but not secured, anyone can access. So Authentication and authorisation should be enabled.
   Can use OpenID Connect(JWT) and OAuth2.

2. Should use Https instead of http. Ths will enable encrypted and secure communication over network.

3. Can add application logging and monitoring to support application maintenance.

4. Should avoid malicious data injection through APIs to access unauthorised data.

5. Adding resource limitations when possible to prevent Dos attacks.

6. proper configuration of http headers to make secure connections. (Like adding CORS origin whitelists) 
   
7. Application dependent libraries can have vulnerabilities. So have to check dependency vulnerabilities before deployment.
   Can use OWASP related plugin for this.

8. When copy artifact to application server should use ssh in order to securely deploy artifact.






