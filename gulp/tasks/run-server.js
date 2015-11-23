var gulp = require('gulp');
var config = require('../config').server;
var server = require('gulp-develop-server');

gulp.task('server:start', function() {
    server.listen({ path: config.dest + '/main.js' });
});

gulp.task('server:restart', function () {
   server.restart(); 
   //gulp.watch([config.dest + '/**.js'], server.restart); 
});
