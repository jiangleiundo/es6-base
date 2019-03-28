/* 处理模板 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', ()=> {
    return gulp.src('app/**/*.ejs') // 打开App下面所有的ejs文件（不局限与app下直接的ejs文件也包括嵌套目录的）
        .pipe(gulp.dest('server')) // 把所有的模板文件原封不动的copy到server目录下
        .pipe(gulpif(args.watch, livereload())) // 监听是否热更新
});