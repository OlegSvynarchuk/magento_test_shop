const path = require('path')
const webpack  = require('webpack');


module.exports = {
    mode: 'production',
    entry:  {index: './src/index.js'},
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ]
      },
      
     
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
              name: "vendor", ///< name of bundle
              chunks: "all" ///< type of code to put in this bundle
            }
          }
        }
      }
}