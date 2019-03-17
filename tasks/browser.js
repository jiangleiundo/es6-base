/* 监听app下面的文件发生变化后执行对应脚本文件  */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb)=>{
    if(!args.watch) return cb();

    // app目录下的js文件发生变化后 就执行 scripts.js，模板文件和css文件类似执行相应js文件
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});