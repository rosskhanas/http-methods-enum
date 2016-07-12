# http-methods-enum

[![Build Status](https://travis-ci.org/opensource-cards/http-methods-enum.svg?branch=master)](https://travis-ci.org/opensource-cards/http-methods-enum)
[![npm package](https://badge.fury.io/js/http-methods-enum.svg)](https://www.npmjs.org/package/http-methods-enum)
[![Dependency Status](https://david-dm.org/opensource-cards/http-methods-enum.svg)](https://david-dm.org/opensource-cards/http-methods-enum)
[![devDependency Status](https://david-dm.org/opensource-cards/http-methods-enum/dev-status.svg)](https://david-dm.org/opensource-cards/http-methods-enum#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/opensource-cards/http-methods-enum/badges/gpa.svg)](https://codeclimate.com/github/opensource-cards/http-methods-enum)

Use human key names instead of string names for http methods.

### Installation

Using [npm](https://www.npmjs.com/):

```
npm install --save http-methods-enum
```

### The Gist

```javascript
import * as httpMethodsEnum from 'http-methods-enum';

console.log(httpMethodsEnum.GET);
console.log(httpMethodsEnum.POST);
console.log(httpMethodsEnum.PUT);
console.log(httpMethodsEnum.DELETE);
console.log(httpMethodsEnum.PATCH);
console.log(httpMethodsEnum.HEAD);
```

### Examples

* Main ([source](https://github.com/opensource-cards/http-methods-enum/tree/master/examples/main))

### License

MIT
