# request-favicon
> An express.js middleware for handling noisy favicon.ico

[![Release][release-image]][release-url]
[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

## Install

```sh
npm install serve-favicon
```

## Example

```javascript
const express = require('express');
const favicon = require('request-favicon');

const app = express()
app.use(favicon())

// Add your routes here, etc.

app.listen(3000)
```

## License

[MIT](LICENSE)

[release-image]: https://img.shields.io/github/release/honzahommer/request-favicon.svg
[release-url]: https://github.com/honzahommer/request-favicon/releases/latest
[npm-image]: https://img.shields.io/npm/v/serve-favicon.svg
[npm-url]: https://npmjs.org/package/serve-favicon
[travis-image]: https://img.shields.io/travis/honzahommer/request-favicon/master.svg
[travis-url]: https://travis-ci.org/honzahommer/request-favicon
