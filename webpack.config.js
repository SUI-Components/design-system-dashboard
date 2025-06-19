const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'sui/dist/app': './sui/src/index.js',
    'ui-kits/dist/app': './ui-kits/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/images/[name].[ext]'
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults'
                  }
                ],
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  }
}
