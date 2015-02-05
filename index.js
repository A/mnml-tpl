'use strict';

var matched = /\:([A-Za-z0-9_]+)/g;

module.exports = function (template) {
  return function(locals) {
    if (!locals) locals = {};
    return template.replace(matched, function(noop, key) {
      return locals[key] || noop;
    });
  };
};
