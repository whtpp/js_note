{
  // let obj = {
  //   a: 3,
  //   b: {
  //     c: 5,
  //   },
  //   d: [3, 5, 7],
  //   e: function () {
  //     console.log(777);
  //   },
  // };
  // JSON序列化和反序列化（不能深拷贝对象以及原型链上的函数方法和值为 undefined）
  // Object.prototype.deepClone = function (obj) {
  //     let _obj = JSON.stringify(obj);
  //     return JSON.parse(_obj);
  // }

  // 递归深拷贝
  // Object.prototype.deepClone = function (object) {
  //   let obj = object instanceof Array ? [] : {};
  //   for (const [k, v] of Object.entries(object)) {
  //     obj[k] = typeof v == "object" ? deepClone(v) : v;
  //   }
  //   return obj;
  //     }
  // let hd = deepClone(obj);
  // hd.a = 4;
  // console.log(obj, hd);
 }

//  function deepClone(target ,map = new WeakMap()){
//   if(typeof target == "object"){
//     let newTarget = Array.isArray(target)?[]:{};
//     if(map.get(target)){
//       return map.get(target);
//     }
//     map.set(target,newTarget);
//     for(var k in target){
//       newTarget[k] = deepClone(target[k],map);
//     }
//     return newTarget;
//  }else{
//    return target;
//  }
  
// }
// var obj = {
//   name:'Jay',
//   fun:{
//     age:20
//   }
// }
// var res = deepClone(obj);
// console.log(res);
// res.name = "abc";
// console.log(obj);
// var _ = require('lodash');
// var obj1 = {
//     a: 1,
//     b: { f: { g: 1 } },
//     c: [1, 2, 3]
// };
// var obj2 = _.cloneDeep(obj1);
// console.log(obj1.b.f === obj2.b.f);// false


  



