var gulp = require('gulp');
var gutil = require('gulp-util');

var spawn = require('child_process').spawn;

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var logBundleError = function(err) {
  gutil.log('Error bundling components: ', err.message, err.stack);
};

gulp.task('browserify', function(cb) {
  return browserify('src/index.js', {
    debug: true,
    standalone: 'bones',
  })
    .transform(babelify,  {presets: ["es2015"], plugins: ["transform-flow-strip-types"]})
    .bundle()
    .on('error', function(err) {
      logBundleError.log(err);
      cb();
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('typecheck', function(cb) {
  var ls = spawn(
    './node_modules/.bin/flow',
    ['check', '--all'],
    {stdio: 'inherit'}
  );

  ls.on('close', function() { cb(); });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('build', ['typecheck', 'browserify']);
gulp.task('default', ['build', 'watch']);
