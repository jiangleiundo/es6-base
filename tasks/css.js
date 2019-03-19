/* 处理css */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css', ()=>{
    return gulp.src('app/**/*.css') // 打开所有app下面的css文件
        .pipe(gulp.dest('server/public')) // 将所有css文件copy到server/public下面
        .pipe(gulpif(args.watch, livereload()))  // 监听是否热更新
});