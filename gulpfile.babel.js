import gulp from 'gulp';
import gutil from 'gulp-util';

import {spawn} from 'child_process';

import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

const logBundleError = (err) => {
  gutil.log('Error bundling components: ', err.message);
};

gulp.task('browserify', (cb) => {
  return browserify('src/**/*.js', {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', (err) => {
      logBundleError(err);
      cb();
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('typecheck', (cb) => {
  const ls = spawn(
    './node_modules/.bin/flow',
    ['check', '--all'],
    {stdio: 'inherit'}
  );

  ls.on('close', () => cb());
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('build', ['typecheck', 'browserify']);
gulp.task('default', ['build', 'watch']);
