/* global describe, it */

'use strict';

// Dependencies
var tpl = require('..');


it('should replace :key with given locals', function() {
  var locals = { host: 'world', user: 'hello' };
  var template = 'ssh :user@:host';
  var result = tpl(template)(locals);
  result.should.be.equal('ssh hello@world');
});

it('should not replace unmatched keys', function() {
  var template = 'ssh :user@:host';
  var result = tpl(template)();
  result.should.equal('ssh :user@:host');
});
