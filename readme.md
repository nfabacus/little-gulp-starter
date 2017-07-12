# How to run jasmine with gulp

In your terminal:
1. npm install --save-dev gulp gulp-jasmine
2. create spec file e.g. test.js
3. create gulpfile.js   
Inside, gulpfile:
```
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
```
You can run any tasks and just pass them to default task.

4. Just run:
```
gulp
```
