# strip-www [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Remove a "www" sub-domain.

**Note:** this version uses a regular expression which cannot be aware of what the top-level domain should be, which could have multiple segments. As a result, "www.co.uk", for example, will be erroneously shortened to "co.uk".


## Installation

[Node.js](https://nodejs.org/) `>= 4` is required. To install, type this at the command line:
```shell
npm install strip-www
```


## Usage

```js
const stripWWW = require('strip-www');

stripWWW('www.domain.com');
//-> domain.com
```


[npm-image]: https://img.shields.io/npm/v/strip-www.svg
[npm-url]: https://npmjs.org/package/strip-www
[travis-image]: https://img.shields.io/travis/stevenvachon/strip-www.svg
[travis-url]: https://travis-ci.org/stevenvachon/strip-www
