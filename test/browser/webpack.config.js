const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    noParse: [
      /node_modules(\\|\/)sinon/
    ],
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(process.cwd(), 'src'),
          path.resolve(process.cwd(), 'test')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon'
    }
  }
};
