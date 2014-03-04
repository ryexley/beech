var gulp = require("gulp");
var mocha = require("gulp-mocha");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");

gulp.task("mocha", function () {
    gulp.src("spec/*.js").pipe(mocha({ reporter: "dot" }));
});

gulp.task("jshint", function () {
    gulp.src(["src/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task("watch", function () {
    gulp.watch(["src/**/*.js", "spec/**/*.js"], ["jshint", "mocha"]);
});

gulp.task("default", ["jshint", "mocha"]);
