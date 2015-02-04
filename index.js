module.exports = template => locals => template.replace(/\:([A-Za-z0-9_]+)/g, (noop, key) => locals[key]);
