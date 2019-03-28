/* 服务器 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动一个脚本作为服务器
import args from './util/args';

gulp.task('serve', (cb)=>{
    if(!args.watch) return cb(); // 如果不是出于监听状态直接返回回调

    // 监听状态下需要创建一个服务器
    let server = liveserver.new(['--harmony','server/bin/www']); // --harmony 表示要在当前命令行下执行server/bin/www脚本
    server.start();

    // 监听server下的public和views目录下文件内容的变化
    gulp.watch(['server/public/**/*.js', 'server/public/**/*.css', 'server/views/**/*.ejs'], function(file){
        server.notify.apply(server, [file]) // 通知服务器文件发生了变化，然后服务器做响应处理
    });

    // 监听需要服务器重启的文件
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
        server.start.bind(server)() // 监听到router下和app.js两个文件修改后服务器重新启动
    })
});


