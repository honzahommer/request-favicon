module.exports = function () {
  return function (req, res, next) {
    req.url === '/favicon.ico' ? res.sendStatus(204) : next();
  }
};
