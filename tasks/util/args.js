// yargs包是用来处理命令行参数的，自动识别命令行命令
import yargs from 'yargs';

const args = yargs
// 是否用于生产，压缩所有scripts
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    // 监听所有文件
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    // 详细输出命令行执行日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    // 强制生成sourcemaps（js压缩后会有一个sourcemaps）
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })

    // 服务器端口
    .option('port', {
        string: true,
        default: '8880',
        describe: 'server port'
    })

    // argv表示对输入的命令行以字符串解析
    .argv;

// args一定要暴露出去否则gulp --watch 无法监听
export default args;
