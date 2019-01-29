const chai = require('chai');
const serve = require('../bin/www');
const should = chai.should();

chai.use(require('chai-http'));

describe('/GET favicon.ico', () => {
  it('it should return status 204', done => {
    chai.request(serve)
      .get('/favicon.ico')
      .end((err, res) => {
         res.should.have.status(204);
         done();
      });
  });
});
