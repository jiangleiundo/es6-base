/* let const 和结构赋值 */

// {
//     let a, b, rest;
//     [a, b] = [1, 2];
//     console.log(a, b);
//     // 1 2
// }
//
// {
//     let a, b, rest;
//     [a, b, ...rest] = [1, 2, 3, 4, 5];
//     console.log(a, b, rest);
//     // 1 2 (3) [3, 4, 5]
// }

// { // 对象赋值
//     let a, b;
//     ({a, b} = {a: 1, b: 2});
//     console.log(a, b);
//        // 1 2
// }

// { // 如果c没有赋值就是undefined
//     let a, b, c;
//     [a, b, c = 5] = [1, 2];
//     console.log(a, b, c);
//     // 1 2 5
// }

// { // 变量交换
//     let a = 1;
//     let b = 2;
//     [b,a] = [a,b];
//     console.log(a, b);
//     // 2 1
// }

// { // 接收函数返回的结果
//     function fun() {
//         return [2, 3]
//     }
//
//     let a, b;
//     [a, b] = fun();
//     console.log(a, b);
//     // 2 3
// }

// { // 通过逗号间隔取出对应的值
//     let a,b,c;
//     [a,,,b] = [1,2,3,4,5];
//     console.log(a,b);
//     // 1 4
// }

// { // 此处变量名要一样
//     let o = {p: 55, q: false};
//     let {p, q} = o;
//     console.log(p, q);
// }

{ // 利用 别名 接收一个对象中的相同key
    let resData = {
        tit: 'fuck you',
        con: [{
            tit: 'abc',
            num: 188
        }]
    };
    let {tit: esTit, con: [{tit: cnTit}]} = resData;
    console.log(esTit, cnTit);
}

