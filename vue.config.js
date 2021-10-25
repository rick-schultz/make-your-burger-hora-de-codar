module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Make Your Burger - Rick Schultz';
      return args;
    });
  },
};
