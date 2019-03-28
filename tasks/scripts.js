/* 项目依赖包 */
import gulp from 'gulp';  // 引入gulp包
import gulpif from 'gulp-if';  // gulp语句中做if判断
import concat from 'gulp-concat'; // 在gulp中处理文件拼接
import webpack from 'webpack'; // 打包工具
import gulpWebpack from 'webpack-stream'; // gulp处理文件流是基于stream的，对于webpack处理是借助webpack-stream
import named from 'vinyl-named'; // 对文件重命名做标志的
import livereload from 'gulp-livereload'; // 热更新
import plumber from 'gulp-plumber'; // 处理文件流
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // 处理js和css压缩
import {log, colors} from 'gulp-util'; // 在命令行输出的包

import args from './util/args.js'; // 对命令行参数进行解析的包

// 创建一个任务
gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js']) // 打开文件，后面是处理逻辑
        .pipe(plumber({ // 处理常规错误逻辑
            errorHandler: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                loaders: [// 此处使用rules会使得index.js中使用import或者@语法报错
                    {test: /\.js$/, loader: 'babel-loader', exclude:'/node_modules/'}
                ]
            }
        }), null, (err, stats) => { // 处理错误
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js')) // 文件编译完存放指定路径
        .pipe(rename({ // 重新备份刚编译好的js文件
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}})) // 压缩文件
        .pipe(gulp.dest('server/public/js')) // 压缩完后存储，此时public/js下面有两个js文件，一个是编译好未压缩的，一个是编译好压缩的 文件名叫 cp.min.js
        .pipe(gulpif(args.watch, livereload())) // 判断args.watch如果有就执行livereload()，监听文件变化后自动刷新
});

