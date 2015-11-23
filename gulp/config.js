var www_dest = app_dest = './build/public',
  server_dest = './build',
  src = './src',
  mui = './node_modules/material-ui/src';

module.exports = {
  browserSync: {
    proxy: 'localhost:3000',
    files: [
      www_dest + '/**',
      server_dest + '/**'
    ]
  },
  server: {
    src: src + "/server/**",
    dest: server_dest
  },
  app: {
    src: src + '/app/**',
    dest: app_dest
  },
  markup: {
    src: src + "/www/**",
    dest: www_dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: www_dest,
      outputName: 'app.js'
    }]
  }
};
