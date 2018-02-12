"use strict";

const gulp = require("gulp");
const swig = require("gulp-swig");
const rename = require("gulp-rename");
const htmlEscape = require('gulp-html-escape');


gulp.task("compile", ["sanitize"], () => {
    gulp.src("./src/entrypoint.swig")
        .pipe( swig() )
        .pipe( rename("theme.xhtml") )
        .pipe( gulp.dest("./") );
});

gulp.task("sanitize", () => {
    return gulp.src("./src/sanitize/src/*")
        .pipe(htmlEscape())
        .pipe( gulp.dest("./src/sanitize/dest/") )
});
