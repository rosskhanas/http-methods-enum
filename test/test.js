const assert = require('assert');
const HttpMethodsEnum = require('../').default;

describe('Check static values', function() {
  it('Values should be correct', function() {
    assert.equal(HttpMethodsEnum.GET, 'GET');
    assert.equal(HttpMethodsEnum.POST, 'POST');
    assert.equal(HttpMethodsEnum.PUT, 'PUT');
    assert.equal(HttpMethodsEnum.DELETE, 'DELETE');
    assert.equal(HttpMethodsEnum.PATCH, 'PATCH');
    assert.equal(HttpMethodsEnum.HEAD, 'HEAD');
  });
});
