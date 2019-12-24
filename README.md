# typescript-plugin-unassert

[![CircleCI](https://circleci.com/gh/januswel/typescript-plugin-unassert.svg?style=svg)](https://circleci.com/gh/januswel/typescript-plugin-unassert)

## Motivation

[Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) is available from TypeScript 3.7, but assertion functions are called and processed always, even in production codes.

This plugin eliminates all of `assert` and `assertIsDefined` calls, that are introduced at the official page.

## Getting Started

```console
npm install --save-dev typescript-plugin-unassert ts-loader
# or
yarn add --dev typescript-plugin-unassert ts-loader
```

Write following lines in your `webpack.config.json`.

```js
const unassertTransformer = require('typescript-plugin-unassert')

// snip

module.exports = {
  // snip
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [unassertTransformer],
          }),
        },
        exclude: /node_modules/,
      },
    ],
  },
  // snip
}
```

Make sure to specify something except for `"CommonJS"` for the `"module"` property in `tsconfig.json` if you need tree shaking.

See [`example`](https://github.com/januswel/typescript-plugin-unassert/tree/master/example) dir which is minimum usage.
