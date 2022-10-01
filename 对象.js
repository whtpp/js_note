// OOP
// 对象是属性和方法的集合即封装
// 将复杂功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象
// 继承是通过代码复用减少冗余代码
// 根据不同形态的对象产生不同结果即多态
// let xj = {
//     name: "向军",
//     show() {
//       return xj.name;
//     }
//   };
//   let hd = xj;
//   xj = null;
//   console.log(hd,xj); 
// function createElement(options) {
//     let {
//       width = '200px',
//       height = '100px',
//       backgroundColor = 'red'
//     } = options;
    
//     const h2 = document.createElement('h2');
//     h2.style.width = width;
//     h2.style.height = height;
//     h2.style.backgroundColor = backgroundColor;
//     document.body.appendChild(h2);
//   }
//   createElement({
//       backgroundColor: 'green'
//   });

// const hd = {
//     name: "后盾人",
//     age: 10
//   };


// 使用for in 也可以遍历数组，但是会存在以下问题：
// 1.index索引为字符串型数字，不能直接进行几何运算
// 2.遍历顺序有可能不是按照实际数组的内部顺序
// 3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性


const user = {
  name: "向军",
  age: 18
};
let desc = Object.getOwnPropertyDescriptor(user, "name");
console.log(desc);