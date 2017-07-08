# http-methods-enum

[![Build Status](https://travis-ci.org/rtkhanas/http-methods-enum.svg?branch=master)](https://travis-ci.org/rtkhanas/http-methods-enum)
[![npm package](https://badge.fury.io/js/http-methods-enum.svg)](https://www.npmjs.org/package/http-methods-enum)
[![devDependency Status](https://david-dm.org/rtkhanas/http-methods-enum/dev-status.svg)](https://david-dm.org/rtkhanas/http-methods-enum#info=devDependencies)

Use human key names instead of string names for http methods.

### Installation

```
yarn add http-methods-enum
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

### License

MIT
