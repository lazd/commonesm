# commonesm
> How to publish a module, maintain support for CommonJS, and test with jest

The state of JavaScript is gross. We have native support for modules in node.js 13.2, but it's painful to use it with our existing tools, and non-trivial to publish packages that have backward compatbility with CommonJS.

That said, if you can stand the pain, there are a myriad of ways to do it, all of which are disgusting. This is one such way.

## WTF

### Why Babel?

[Babel](https://babeljs.io/) is required to compile the CommonJS version of the module that will be used in situations where module support is not present.


### What does `"module": "..."` in `package.json` do?

This indicates what file to use when esm is `import` is used.


### What does `"main": "..."` in `package.json` do?

This indicates what file to use when CJS `require()` is used.


### What does `"exports": "..."` in `package.json` do?

This syntax configures the experimental conditional exports support in Node.js, effectively doing the same thing as `"main": "..."` amd `"module": "..."`.


### What does `"type": "module"` in `package.json` do?

This tells node that the code contained in this repo is a module, and should use the `import` and `export` syntax.
