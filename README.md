# typescript-plugin-unassert

[![CircleCI](https://circleci.com/gh/januswel/typescript-plugin-unassert.svg?style=svg)](https://circleci.com/gh/januswel/typescript-plugin-unassert)

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
