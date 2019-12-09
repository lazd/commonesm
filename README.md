# commonesm
> How to publish a module that supports native ESM, CommonJS, and testing with ava

The state of JavaScript is bad. We have support natively for ESM in node.js 13.2, but it's enormously painful to use it with our existing tools and publish packages that have backward compatbility.

That said, if you can stand the pain, there are a myriad of ways to do it, all of which are disgusting. This is one such way.

## Why `esm`?

ESM is required to get ava to include test files that use `import` syntax.


## Why not include `"type": "module"` in `package.json`?

If `{ "type": "module" }` is present in the `package.json`, your test files will be unable to `require()` your source files:

```
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: commonesm/util.js
```


## Why does the source use `.mjs`?

Because we're not using `{ "type": "module" }`, we have to name our files `.mjs` to tell node that they're modules.

That is, if we had `index.js` without `{ "type": "module" }` in `package.json`, executing `node index.js` will fail with:

```
SyntaxError: Cannot use import statement outside a module
```


## Why `module-extension`?

The babel-compiled output will reference the wrong filenames (expects `.mjs`, but files are named `.js`).

Adding this exstension and configuring it to remap `.mjs` to `.js` fixes this.


## Why babel?

Babel is required to compile the CommonJS version of the module that will be used in situations where module support is not present.

