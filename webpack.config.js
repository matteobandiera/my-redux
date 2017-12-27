module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          'es2015',
          'stage-2',
        ],
      },
    }],
  },
};
