import assert from 'assert';
import HttpMethodsEnum from '../src';

describe('check static values', function() {
  it('values should be correct', function() {
    assert.equal(HttpMethodsEnum.GET, 'GET');
    assert.equal(HttpMethodsEnum.POST, 'POST');
    assert.equal(HttpMethodsEnum.PUT, 'PUT');
    assert.equal(HttpMethodsEnum.DELETE, 'DELETE');
    assert.equal(HttpMethodsEnum.PATCH, 'PATCH');
    assert.equal(HttpMethodsEnum.HEAD, 'HEAD');
  });
});
