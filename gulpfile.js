const gulp = require('gulp');
const jasmine = require('gulp-jasmine');


gulp.task('one', function() {
    console.log("task1");
});

gulp.task('two', function() {
    console.log("task2");
    gulp.src('spec/test.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine())
});

gulp.task('default', ['one', 'two']);
    
