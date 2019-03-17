/* 每一次执行编译清空server下面的public和views的所有文件 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
    return del(['server/public','server/views'])
});
