// 数组去重的多种方法
{
  let arr = [
    {},
    {},
    1,
    2,
    2,
    "abc",
    "abc",
    true,
    true,
    false,
    false,
    undefined,
    undefined,
    NaN,
    NaN,
  ];

  // set+点运算符
  // Array.prototype.unique = function(){
  //     let arr1 = [...new Set(arr)];
  //     return arr1;
  // }

  // set+Array.from方法（可浅拷贝一个可迭代对象）
  // Array.prototype.unique = function(){
  //     let arr1 = Array.from(new Set(arr));
  //     return arr1;
  // }

  // includes方法：includes底层使用sameValueZero()比较，
  // Array.prototype.unique = function(){
  //     const newArray = [];
  //     arr.forEach(item=>{
  //         if(!newArray.includes(item)){
  //             newArray.push(item);
  //         }
  //     })
  //     return newArray;
  // }

  // 利用map的has和set方法（属性名不可重复）
  // Array.prototype.unique = function(){
  //     const newArray = [];
  //     const map = new Map();
  //     arr.forEach(item=>{
  //         if(!map.has(item)){
  //             map.set(item,true);
  //             newArray.push(item);
  //         }
  //     })
  //     return newArray;
  // }

  // 利用对象属性名不可重复
  // Array.prototype.unique = function(){
  //     const newArray = [];
  //     const obj = {};
  //     arr.forEach(item=>{
  //         if(!obj[item]){
  //             obj[item] = true;
  //             newArray.push(item);
  //         }
  //     })
  //     return newArray;
  // }
  // 利用reduce方法和includes
  // Array.prototype.unique = function(){
  //     const newArray = arr.reduce((pre,cur)=>{
  //         if(pre.includes(cur) === false){
  //             pre.push(cur);
  //         }
  //         return pre;
  //     },[])
  //     return newArray;
  // }
  // hasOwnProperty方法可以判断类型 {},{}
  // Array.prototype.unique = function(){
  //     const obj = {};
  //     const newArray = arr.filter(item=>{
  //         return obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item +item] = true
  //     })

  //     return newArray;
  // }
  // console.log(arr.unique());
  // 下列方法无法判断NaN

  // 过滤器filter方法+indexof()方法
  // Array.prototype.unique = function(){
  //     const newArray = arr.filter((item,index)=>{
  //         return arr.indexOf(item)===index;
  //     })
  //     return newArray;
  // }

  // indexof
  // Array.prototype.unique = function(){
  //     const newArray = [];
  //     arr.forEach(item=>{
  //         if(newArray.indexOf(item)===-1){
  //             newArray.push(item);
  //         }
  //     })
  //     return newArray;
  // }

  // 双循环+splice
  // Array.prototype.unique = function(){
  //     let len = arr.length;
  //     for(let i=0;i<len-1;i++){
  //         for(let j=i+1;j<len;j++){
  //             if(arr[i]===arr[j]){
  //                 arr.splice(j,1);
  //                 len--;
  //                 j--;
  //             }
  //         }
  //     }
  //     return arr;
  // }
  // 单循环+sort
  // Array.prototype.unique = function(){
  //     let len = arr.length;
  //     arr = arr.sort();
  //     for(let i=0;i<len-1;i++){
  //             if(arr[i]===arr[i+1]){
  //                 arr.splice(i+1,1);
  //                 len--;
  //             }
  //     }
  //     return arr;
  // }
}

// 数组扁平化
{
  let arr = [1, [2, [3, 4]]];

  // 1.用tostring，split，number

  function flatten(arr) {
    let newArr = [];
    arr = arr.toString().split(",");
    arr.forEach((item) => {
      newArr.push(Number(item));
    });
    return newArr;
  }
  // console.log(flatten(arr));

  // 2.es6的falt

  function flatten(arr) {
    return arr.flat(Infinity);
  }
  // console.log(flatten(arr));

  // 3.正则+json

  function flatten(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, "");
    str = "[" + str + "]";
    return JSON.parse(str);
  }
  // console.log(flatten(arr));

  // 4.some+...
  function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
      arr = [].concat(...arr);
    }
    return arr;
  }
  // console.log(flatten(arr));
}

// 数组方法实现
{
  // 字符串翻转
  let s = "abc";
  // console.log(Array.prototype.slice.call(s).reverse().join(''))

  // flat方法
  let arr = [1, 2, [3, [4, [5]]]];
  Array.prototype._flat = function (deep) {
    // 终止条件
    let arr = this;
    if (!Array.isArray(arr) || deep <= 0) {
      return arr;
    }
    // 递归返回一个扁平化数组
    return arr.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        return prev.concat(cur._flat(deep - 1));
      } else {
        return prev.concat(cur);
      }
    }, []);
  };
  // console.log(arr._flat(3))

  // push方法
  Array.prototype._push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    console.log(this);
    return this.length;
  };
  // console.log([2,4,5]._push(6,7,8))

  // filter方法
  Array.prototype._filter = function (fn) {
    if (typeof fn != "function") return;
    let len = this.length;
    let newArr = [];
    for (let i = 0; i < len; i++) {
      fn(this[i]) && newArr.push(this[i]);
    }
    return newArr;
  };
  // console.log([2,4,5,7,8,9]._filter(item=>item>5))

  // map方法
  Array.prototype._map = function (fn) {
    if (typeof fn != "function") return;
    let len = this.length;
    let newArr = [];
    for (let i = 0; i < len; i++) {
      newArr.push(fn(this[i]));
    }
    return newArr;
  };
  // console.log([2,4,5,7,8,9]._map(item=>item+2))

  // repeat方法
  function _repeat (str,num) {
    return num>0 ? str.concat(_repeat(str,--num)) : ''
  };
  console.log(_repeat('abc',3))
}
