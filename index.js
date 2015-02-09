'use strict';

// Dependencies
var debug = require('debug')('mnml-tpl');

// Settings
var matched = /\:([A-Za-z0-9_]+)/g;


module.exports = function (template) {
  return function(locals) {
    if (!locals) locals = {};
    return template.replace(matched, function(noop, key) {
      debug('render template `%s` with locals %o', template, locals);
      return key in locals ? locals[key] : noop;
    });
  };
};
