/* gulp 命令首先会去找gulpfile.babel.js，这里需要配置要加载的文件 */
/* 把tasks下面的所有文件都加载进来执行 */
import requireDir from 'require-dir';

requireDir('./tasks');