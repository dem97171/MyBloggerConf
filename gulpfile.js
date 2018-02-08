"use strict";

const gulp = require("gulp");
const swig = require("gulp-swig");
const rename = require("gulp-rename");


gulp.task("compile", () => {
    gulp.src("./src/entrypoint.swig")
        .pipe( swig() )
        .pipe( rename("theme.xhtml") )
        .pipe( gulp.dest("./") );
});
