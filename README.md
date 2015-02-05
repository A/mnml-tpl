# Tiny Template

Replace all `:keys` in string with given object.


## Install

```
npm i -S tiny-template
```

## Examples

```js
var tpl = require('tiny-template');

var locals = { host: 'world', user: 'hello' };
var template = 'ssh :user@:host';
tpl(template)(locals); // ssh hello@world
```

## Licence

MIT

