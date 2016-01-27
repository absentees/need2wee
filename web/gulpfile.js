var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });

		gulp.watch(["./src/*.html","./src/*.css"]).on("change", browserSync.reload);

});
