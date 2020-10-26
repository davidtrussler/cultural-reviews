const path = require('path'); 
// const webpack = require('webpack'); 
// const nodeExternals = require('webpack-node-externals')

// const serverConfig = {
//   entry: './src/server/index.js',
//   target: 'node',
//   externals: [nodeExternals()],
//   output: {
//     path: __dirname,
//     filename: 'server.js',
//     publicPath: '/'
//   },
//   mode: 'production', 
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: 'babel-loader' }, 
//       { test: /\.(scss)$/, use: ['css-loader', 'sass-loader']}
//     ]
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       __isBrowser__: "false"
//     })
//   ]
// }

module.exports = {
  entry: './src/server/index.js', 
  output: {
    path: __dirname,
    filename: 'server.js', 
    publicPath: '/'
  }
}
