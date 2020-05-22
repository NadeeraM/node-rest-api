let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app.js");

chai.should();

chai.use(chaiHttp);

describe('Details API', () => {

    describe("GET /api/v1/details", () => {
        it("It should get Descriptions", (done) => {
            chai.request(server)
                .get("/api/v1/details")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('detail');
                    response.body.should.have.property('detail').eq('Hello World');
                done();
                });
        });
    });
});


describe('Health API', () => {

    describe("GET /api/v1/health", () => {
        it("It should return 200", (done) => {
            chai.request(server)
                .get("/api/v1/health")
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });
    });
});


describe('Metadata API', () => {

    describe("GET /api/v1/metadata", () => {
        it("It should get metadata", (done) => {
            chai.request(server)
                .get("/api/v1/metadata")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('myapplication');
                done();
                });
        });
    });
});