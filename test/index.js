const chai = require('chai');
const serve = require('../bin/www');
const should = chai.should();

chai.use(require('chai-http'));

describe('/GET favicon.ico', function () {
  it('it should return status 204', function (done) {
    chai.request(serve)
      .get('/favicon.ico')
      .end(function(err, res) {
         res.should.have.status(204);
         done();
      });
  });
});
