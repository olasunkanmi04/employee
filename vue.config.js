module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")]
    }
  },
  configureWebpack: {
    entry: {
      main: './src/main.js'
    }
  }
}
