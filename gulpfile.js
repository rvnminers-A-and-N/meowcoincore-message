'use strict';

var gulp = require('gulp');
var ritocoreTasks = require('ritocore-build');

ritocoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
