# strip-www [![NPM Version][npm-image]][npm-url] ![File Size][filesize-image]  [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Remove a leading "www" subdomain from a hostname.


**Note:** this library uses a rather [complex algorithm](https://npmjs.com/parse-domain) for parsing hostnames, which can result in bundled file sizes that are larger than you might expect. If all you want is a simple RegExp, use a `1.x` release; but first read about its edge cases.


## Installation

[Node.js](https://nodejs.org) `>= 14` is required. To install, type this at the command line:
```shell
npm install strip-www
```


## Usage

```js
const stripWWW = require('strip-www');

stripWWW('www.domain.com');     //-> domain.com
stripWWW('www.www.domain.com'); //-> www.domain.com
stripWWW('www.unlisted-tld');   //-> www.unlisted-tld
```

The hostname must be [Punycode encoded](https://en.wikipedia.org/wiki/Punycode), as provided by a [`URL`](https://mdn.io/URL):

```js
stripWWW('www.ᄯᄯᄯ.com');
//-> 'www.ᄯᄯᄯ.com'

const url = new URL('http://www.ᄯᄯᄯ.com');
stripWWW(url.hostname);
//-> 'xn--brdaa.com'
```

If necessary, you can decode after with [punycode](https://npmjs.com/punycode):

```js
const { toUnicode } = require('punycode');

console.log(toUnicode('xn--brdaa.com'));
//-> 'ᄯᄯᄯ.com'
```


[npm-image]: https://img.shields.io/npm/v/strip-www.svg
[npm-url]: https://npmjs.org/package/strip-www
[filesize-image]: https://img.shields.io/badge/bundle-36kB%20gzipped-blue.svg
[travis-image]: https://img.shields.io/travis/stevenvachon/strip-www.svg
[travis-url]: https://travis-ci.org/stevenvachon/strip-www
[coveralls-image]: https://img.shields.io/coveralls/stevenvachon/strip-www.svg
[coveralls-url]: https://coveralls.io/github/stevenvachon/strip-www
