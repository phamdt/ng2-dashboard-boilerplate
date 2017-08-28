const conf = require('./gulp.conf');

module.exports = function () {
  return {
    port: 3001,
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ]
    },
    open: false
  };
};
