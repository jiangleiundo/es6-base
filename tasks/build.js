/* 把所有任务都串起来，处理脚本依赖关系和执行顺序 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; // 处理脚本依赖关系和执行顺序

// clean在最前面，server在最后面，除了css和pages外其他脚本顺序不能颠倒
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
