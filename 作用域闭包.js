// // 如果子函数被使用时父级环境将被保留
// function hd() {
//     let n = 1;
//     return function() {
//       let b = 1;
//       return function() {
//         console.log(++n);
//         console.log(++b);
//       };
//     };
//   }
//   let a = hd()();
//   a(); //2,2
//   a(); //3,3
// let arr9 = [];
// for (let i = 0; i < 10; i++) {
// 	arr9.push((() => i));
// }
// console.log(arr9[3]()); 
// var arr2 = [];
// for (var i = 0; i < 10; i++) {
//   (function (a) {
//       arr2.push(()=>a);
//   })(i);
// }
// console.log(arr2[3]()); //3

// let arr1 = [3, 2, 4, 1, 5, 6];
// function between(a, b) {
//   return function(v) {
//     return v >= a && v <= b;
//   };
// }
// console.log(arr1.filter(between(3, 5)));
// let hd = {
//     user: "后盾人",
//     get: function() {
//       return function() {
//         return this.user;
//       };
//     }
//   };
//   console.log(hd.get()()); //undefined