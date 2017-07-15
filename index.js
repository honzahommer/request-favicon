module.exports = () => (req, res, next) => req.url === '/favicon.ico' ? res.sendStatus(204) : next()
