//instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

// const a = {};
// const b = {};
// const c = {};

// Object.setPrototypeOf(a, b);
// Object.setPrototypeOf(b, c);

// console.log(b.isPrototypeOf(a)); //true
// console.log(c.isPrototypeOf(a)); //true
// console.log(b.isPrototypeOf(c)); //false

// 使用isPrototypeOf检测一个对象是否是另一个对象的原型链中

// function A() {}
// function B() {}
// function C() {}

// const c = new C();
// B.prototype = c;
// const b = new B();
// A.prototype = b;
// const a = new A();

// console.dir(a instanceof A); //true
// console.dir(a instanceof B); //true
// console.dir(a instanceof C); //true
// console.dir(b instanceof C); //true
// console.dir(c instanceof B); //false

// 借用原型
// 使用 call 或 apply 可以借用其他原型方法完成功能。
// class Controller {
//   say() {
//     return this.name;
//   }
//   total() {
//     return this.data.reduce((t, c) => t + c.price, 0);
//   }
//   getByKey(key) {
//     return this.data.filter(item => item.name.includes(key));
//   }
// }
// class Lesson extends Controller {
//   constructor(lessons) {
//     super();
//     this.data = lessons;
//   }
//   getByKey(key) {
//     return super.getByKey(key).map(item => item.name);
//   }
// }
// let data = [
//   { name: "js", price: 100 },
//   { name: "mysql", price: 212 },
//   { name: "vue.js", price: 98 }
// ];
// const hd = new Lesson(data);
// console.log(hd.getByKey("js"));

// 原型实例操作

{
  // // 继承工厂函数
  // function extend(sub, sup) {
  //   sub.prototype = Object.create(sup.prototype);
  //   sub.prototype.constructor = sub;
  // }
  // // 父类
  // function Animation() {}
  // // 显示
  // Animation.prototype.show = function () {
  //   this.style.display = "block";
  // };
  // // 隐藏
  // Animation.prototype.hide = function () {
  //   this.style.display = "none";
  // };
  // // 变色
  // Animation.prototype.color = function (color) {
  //   this.style.background = color;
  // };
  // // 继承
  // function Tab(tab) {
  //   this.tab = tab;
  //   this.links = null;
  //   this.sections = null;
  // }
  // extend(Tab,Animation);
  // // 运行
  // Tab.prototype.run = function () {
  //   this.links = this.tab.querySelectorAll('a');
  //   this.sections = this.tab.querySelectorAll('section');
  //   this.bindEvent();
  //   this.reset();
  //   this.action(0);
  //   // this.sections = this.
  // };
  // // 绑定事件
  // Tab.prototype.bindEvent = function () {
  //   this.links.forEach((item,i) => {
  //     item.addEventListener('click',()=>{
  //       this.reset();
  //       this.action(i);
  //     })
  //   });
  // }
  // Tab.prototype.action = function (i) {
  //     this.color.call(this.links[i],'#e67e22');
  //     this.show.call(this.sections[i])
  // }
  // Tab.prototype.reset = function () {
  //   this.links.forEach((item,i)=>{
  //     this.color.call(item,'#ccc');
  //     this.hide.call(this.sections[i]);
  //   })
  // }
  // new Tab(document.querySelector('.tab1')).run();
  // new Tab(document.querySelector('.tab2')).run();
}



// 类的实例操作

// {
//   class Animation {
//     constructor (item) {
//       this.item = item;
//       this.isShow = true;
//       this.defaultHeight = this.height;
//     }
//     get height() {
//       return window.getComputedStyle(this.item).height.slice(0,-2)*1;
//     }
//     set height (height){
//       this.item.style.height = height + 'px';
//     }
//     hide(callback) {
//       this.isShow = false;
//       let id = setInterval(()=>{
//         if(this.height<=4){
//           clearInterval(id);
//           callback && callback();
//           return;
          
//         }
//         console.log(111)
//         this.height = this.height - 1;
//       },10)
//     }
//     show(callback) {
//       this.isShow = false;
//       let id = setInterval(()=>{
//         if(this.height>=this.defaultHeight){
//           clearInterval(id);
//           callback && callback();
//           return;
          
//         }
//         console.log(222)
//         this.height = this.height + 1;
//       },10)
//     }
//   }
//   let item = document.querySelector('.s1');
//   let hd = new Animation(item);
//   hd.hide(()=>{
//     hd.show()
//   }
    
//   );



// }
