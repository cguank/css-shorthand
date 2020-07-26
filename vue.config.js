module.exports = {
  configureWebpack: config => {
  },
  chainWebpack: config => {
    // config.resolveLoader = {
    //   'test-loader': './test-loader.js'
    // }
    config.module
      .rule('istest')
        .test(/\.txt$/)
      .use('test-loader')
        .loader('./test-loader')
      .end()
   console.log(config.toString());
  } 
}