module.exports = {
    devServer: {
      contentBase: './app',
      compress: true,
      proxy: {
        '/graphql': {
          target: 'http://localhost:4000/graphql',
          secure: false,
        },
      },
    },
  };