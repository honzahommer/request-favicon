module.exports = require('express')()
  .use(require('./index')())
  .listen(3000)
