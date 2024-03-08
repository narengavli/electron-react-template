const path = require('path');
const rules = require('./webpack.rules');

rules.push(
  {
    test: /\.mp3$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/music/'
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          url: true
        }
      }
    ],
  },
  {
    test: /\.(svg|png|jpg|gif)$/,
    include: [
      path.resolve(__dirname, "src/client/assets/images")
    ],
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/'
        }
      }
    ]
  }
);

module.exports = {
  module: {
    rules,
  },
};
