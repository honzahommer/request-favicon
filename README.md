# request-favicon

[![npm version][npm-image]][npm-url]
[![npm download][downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/request-favicon.svg)](https://greenkeeper.io/)

> An express.js middleware for handling noisy favicon.ico

Modern browsers usually asks for favicon of the website. Having a favicon in a Web page is a good thing (normally). 

However it is not always desired and sometime developers need a way to avoid the extra payload. 

Nice way to handle that is to send 204 status code for `/favicon.ico` requests.

## Install

```sh
npm install request-favicon
```

## Example

```javascript
const express = require('express');
const favicon = require('request-favicon');

const app = express();
app.use(favicon());

// Add your routes here, etc.

app.listen(3000);
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/request-favicon.svg
[npm-url]: https://npmjs.org/package/request-favicon
[travis-image]: https://img.shields.io/travis/honzahommer/request-favicon/master.svg
[travis-url]: https://travis-ci.org/honzahommer/request-favicon
[downloads-image]: https://img.shields.io/npm/dm/request-favicon.svg
