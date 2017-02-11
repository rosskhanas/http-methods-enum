# http-methods-enum

[![Build Status](https://travis-ci.org/rtkhanas/http-methods-enum.svg?branch=master)](https://travis-ci.org/rtkhanas/http-methods-enum)
[![npm package](https://badge.fury.io/js/http-methods-enum.svg)](https://www.npmjs.org/package/http-methods-enum)
[![Dependency Status](https://david-dm.org/rtkhanas/http-methods-enum.svg)](https://david-dm.org/rtkhanas/http-methods-enum)
[![devDependency Status](https://david-dm.org/rtkhanas/http-methods-enum/dev-status.svg)](https://david-dm.org/rtkhanas/http-methods-enum#info=devDependencies)

Use human key names instead of string names for http methods.

### Installation

Using [npm](https://www.npmjs.com/):

```
npm install http-methods-enum --save
```

### The Gist

```javascript
import HttpMethodsEnum from 'http-methods-enum';

console.log(HttpMethodsEnum.GET);
console.log(HttpMethodsEnum.POST);
console.log(HttpMethodsEnum.PUT);
console.log(HttpMethodsEnum.DELETE);
console.log(HttpMethodsEnum.PATCH);
console.log(HttpMethodsEnum.HEAD);
```

### Examples

* Main ([source](https://github.com/rtkhanas/http-methods-enum/tree/master/examples/main))

### License

MIT
