// const content = prompt();
// const reg = new RegExp(content,'g');
// console.log(reg);
// let body = document.querySelector('#content').innerHTML.replace(reg,str=>{
//     return `<span style="color:red">${str}</span>`
// })
// console.log(str)
// document.body.innerHTML = body;

// 驼峰命名法

// let str = "i-am-an-big-panda";
// var reg = /-(\w)/g;
// console.log(str.replace(reg,function(match,res){
//     return res.toString().toUpperCase();
// }))

// 匹配一个[1-255]的数字

// let str1 = '9';
// var reg = /^([1-9][0-9]?|1[0-9]{2}|2([0-4][0-9]|5[0-5]))$/;//先匹配两位数，再匹配三位数
// console.log(reg.test(str1));

// 匹配ip地址

// let str2 = '248.89.31.26';
// var reg = /^(([0-9]{1,2}|1[0-9]{2}|2([0-4][0-9]|5[0-5]))\.){3}([0-9]{1,2}|1[0-9]{2}|2([0-4][0-9]|5[0-5]))$/
// console.log(reg.test(str2));

// 非全局匹配下的match方法的结果和exec方法的结果一样，会得到所有的匹配信息，包括子表达式的内容。
//  \d{1,3}会先匹配三个数字，(\d{3})*再匹配三个数字。然后\d{1,3}再匹配剩下的78

// var str3 = "12345678";
// var reg = /\d{1,3}(\d{3})*/;
// console.log(str3.match(reg)); // ["123456","78"]

// // 给一串数字添加千位分号+格式化金钱

// // 判断是否符合USD格式
// // 给定字符串 str，检查其是否符合美元书写格式

var str4 = "12345678";
var reg = /(?=(\d{3})+$)/g;
var reg2 = /^/;
res = str4.replace(reg, ",").replace(reg2, "$ ");
// console.log(res);


// // 以 $ 开始
// // 整数部分，从个位起，满 3 个数字用 , 分隔
// // 如果为小数，则小数部分长度为 2
// // 正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3**

// function isUSD(str) {
//     var regx = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
//     return regx.test(str);
// }


// //清除"数字"和"."以外的字符
// var str5 = "123@ da.2.99h";
// var reg = /[^\d.]/g;
// console.log(str5.replace(reg, ""));

// //验证第一个字符是数字
// // var str6 = "123@ da.2.99h";
// // var reg = /^\d/;
// // console.log(reg.test(str6));

// //只保留第一个字符, 清除多余的
// var str7 = "safsfw1231";
// var reg = /(.).*/g; //匹配整个str
// console.log(str7.replace(reg, "$1")); //用第一个字符替换整个str

// //只能输入两个小数
// var str8 = "0.12";
// var reg = /^\d+\.\d{2}$/g;
// console.log(str8.match(reg));

// // js校验同时包含三项（大、小写字母，数字）
// let str9 = "123we";
// var reg = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
// console.log(reg.test(str9));

// var str10 = "810";
// var reg = /^[1-9][0-9]*$/g;;
// console.log(reg.test(str10));


// 获取 url 中的参数
// 指定参数名称，返回该参数的值 或者 空字符串
// 不指定参数名称，返回全部的参数对象 或者 {}
// 如果存在多个同名参数，则返回数组

// var str11 = 'http://www.baidu.com:8080/cd/a?a=1&b=2#active'
// var arr = str11.match(/^(\w+):\/\/([^/:]+):(\d*)?((?:\/\w*)*)\?([^#]*)?#(\w*)?$/);
// let reg = /^(\w+):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;


// console.log(arr) 
// // 1: "http"
// // 2: "www.baidu.com"
// // 3: "8080"
// // 4: "/cd/a"
// // 5: "a=1&b=2"
// // 6: "active"
// let research = arr[5];
// research = research.match(/\d/g);
// console.log(research)


// // 匹配汉字
// var st = "h"
// var regx = /^[\u4e00-\u9fa5]{0,}$/;
// console.log(regx.test(st))
function sumBigNumber(a, b) {
    let res = '';
    let temp = 0;
    
    a = a.split('');
    b = b.split('');
    
    while (a.length || b.length || temp) {  
      temp += Number(a.pop()) + Number(b.pop());
      res = (temp % 10) + res;
      temp  = temp > 9
    }
    return Number(res);
  }
//   console.log(sumBigNumber('123', '123'))
function printMatrix(arr){
    let m = arr.length, n = arr[0].length
      let res = []
    
    // 左上角，从0 到 n - 1 列进行打印
    for (let k = 0; k < n; k++) {
      for (let i = 0, j = k; i < m && j >= 0; i++, j--) {
        res.push(arr[i][j]);
      }
    }
  
    // 右下角，从1 到 n - 1 行进行打印
    for (let k = 1; k < m; k++) {
      for (let i = k, j = n - 1; i < m && j >= 0; i++, j--) {
        // res.push(arr[i][j]);
      }
    }
    return res
  }
  let arr =[[1,2,4],
            [3,4,5],
            [7,8,4]]
  console.log(printMatrix(arr))