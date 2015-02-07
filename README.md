# Minimal Templates

[![Build Status](https://travis-ci.org/rambler-digital-solutions/mnml-tpl.svg?branch=master)](https://travis-ci.org/rambler-digital-solutions/mnml-tpl)

Replace all `:keys` in string with given object.


## Install

```
npm i -S mnml-tpl
```

## Examples

```js
var tpl = require('mnml-tpl');

var locals = { host: 'world', user: 'hello' };
var template = 'ssh :user@:host';
tpl(template)(locals); // ssh hello@world
```

## License

MIT

