/* 命令行只输入 gulp 时执行默认脚本(懒汉模式) */
import gulp from 'gulp';

gulp.task('default', ['build']);