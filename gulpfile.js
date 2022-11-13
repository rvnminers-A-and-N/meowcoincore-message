'use strict';

var gulp = require('gulp');
var meowcoincoreTasks = require('meowcoincore-build');

meowcoincoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
