const sassJson = require('node-sass-json-functions')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssLoaderRule = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    modules: {
      namedExport: true,
      localIdentName: "[name]--[local]--[hash:base64:5]",
      exportLocalsConvention: "dashesOnly",
      exportOnlyLocals: false
    }
  }
}

const postCssLoaderRule = {
  loader: 'postcss-loader',
  options: {
    execute: false,
    sourceMap: true
  }
}

const sassLoaderRule = {
  "loader": 'sass-loader',
  "options": {
    "sassOptions": {
      "functions": {
        ...sassJson
      },
      "file": null,
      "data": null,
      "includePaths": [],
      "indentedSyntax": false,
      "indentType": "space",
      "indentWidth": 2,
      "linefeed": "lf",
      "omitSourceMapUrl": false,
      "outFile": null,
      "precision": 5,
      "sourceComments": false,
      "sourceMapContents": false,
      "sourceMapEmbed": false
    }
  }
}

const sassRule = {
  test: /\.s(a|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoaderRule,
    postCssLoaderRule,
    sassLoaderRule
  ]
}

const sassRuleModules = {
  test: /\.module\.s(a|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        modules: {
          namedExport: true
        }
      }
    },
    cssLoaderRule,
    postCssLoaderRule,
    sassLoaderRule
  ]
}

const rules = {
  oneOf: [
    sassRuleModules,
    sassRule
  ]
}

module.exports = {
  "stories": [
    "../src/**/*stories.mdx",
    "../src/**/*stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@etchteam/storybook-addon-status/register"
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async (config) => {
    config.plugins.push(new MiniCssExtractPlugin())
    config.module.rules.push(rules)

    config.resolve.fallback = {
      ...config.resolve.fallback
    }

    return config
  },
  core: {
    builder: 'webpack5',
  }
}
