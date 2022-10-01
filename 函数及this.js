// let obj6 = {
//     site: "后盾人",
//     show() {
//       console.log(this.site); //后盾人
//       console.log(`this in show method: ${this}`); //this in show method: [object Object]
//       function hd() {
//         console.log(this); //window
//         console.log(typeof this.site); //undefined
//         console.log(`this in hd function: ${this}`); //this in hd function: [object Window]
//       }
//       hd();
//     }
//   };
//   obj6.show();

// let Lesson = {
//     site: "后盾人",
//     lists: ["js", "css", "mysql"],
//     show() {
//       return this.lists.map(function(item) {
//         return `${this.site}-${item}`;
//       },this);//把上层this传递进来
//     }
//   };
//   console.log(Lesson.show());
// let Lesson = {
//     site: "后盾人",
//     lists: ["js", "css", "mysql"],
//     show() {
//       const self = this;//在父作用域中定义引用this的变量
//       return this.lists.map(function(title) {
//         return `${self.site}-${title}`;

//       });
//     }
//   };
//   console.log(Lesson.show());

// var name = 'hdcms';
// var obj7 = {
//   name: '后盾人',
//   getName: function () {
//     var self = this;
// 		return function() {
//     	return this;
//     }
//   }
// }
// console.log(obj7.getName()()); //返回window.name的值hdcms

// let Dom = {
//     site: "后盾人",
//     bind() {
//       const button = document.querySelector("button");
//       button.addEventListener("click", event => {
//         alert(this.site + event.target.innerHTML);
//       });
//     }
//   };
//   Dom.bind();

//   let Dom = {
//     site: "后盾人",
//     bind() {
//       const button = document.querySelector("button");
//       button.addEventListener("click", function() {
//         alert(this.getAttribute("desc"));
//       });
//     }
//   };
//   Dom.bind();

// let Dom = {
//     site: "后盾人",
//     handleEvent: function(event) {
//       console.log(this);
//     },
//     bind() {
//       const button = document.querySelector("button");
//       button.addEventListener("click", this);
//     }
//   };
// Dom.bind();
// function User(name) {
//     console.log(this)
//   }
//   let hd = new User("后盾人");

// function User(name) {
//     this.name = name;
//     console.log(this)
//   }

//   let hdcms = {};
//   User.call(hdcms, "HDCMS");
//   console.log(hdcms.name); //HDCMS

// function show(title) {
//     alert(`${title+this.name}`);
// }
// let lisi = {
//     name: '李四'
// };
// let wangwu = {
//     name: '王五'
// };
// show.call(lisi, '后盾人');
// show.apply(wangwu, ['HDCMS']);

// function show() {
//     alert(this.getAttribute('message'));
// }
// let bts = document.getElementsByTagName('button');
// for (let i = 0; i < bts.length; i++) {
//     bts[i].addEventListener('click', () => show.call(bts[i]));
// }

// let arr3 = [1, 3, 2, 8];
// console.log(Math.max(arr3)); //NaN
// console.log(Math.max.apply(Math, arr3)); //8
// console.log(Math.max(...arr3)); //8

// "use strict";
// function Request() {
//   this.get = function(params = {}) {
//     //组合请求参数
//     let option = Object.keys(params)
//       .map(i => i + "=" + params[i])
//       .join("&");

//     return `获取数据 API:${this.url}?${option}`;
//   };
// }
// //文章控制器
// function Article() {
//   this.url = "article/index";
//   Request.apply(this, []);
// }
// let hd = new Article();
// console.log(
//   hd.get({
//     row: 10,
//     start: 3
//   })
// );
// //课程控制器
// function Lesson() {
//   this.url = "lesson/index";
//   Request.call(this);
// }
// let js = new Lesson();
// console.log(
//   js.get({
//     row: 20
//   })
// );
// function panel(i){
//     let dds = document.querySelectorAll('dd');
//     dds.forEach(dd=>{
//         dd.setAttribute('hidden','hidden');
//         dds[i].removeAttribute('hidden')
//     })
// }
// document.querySelectorAll('dt').forEach((dt,i)=>{
//     dt.addEventListener('click',()=>{
//         // panel.call(this,i)
//         panel(i)
//     })
// })
// function hd(a, b) {
//     return this.f + a + b;
//   }

//   //使用bind会生成新函数
//   let newFunc = hd.bind({ f: 1 },3);//优先使用它的参数

//   //1+3+2 参数2赋值给b即 a=3,b=2
//   console.log(newFunc(2,6));

// document.querySelector("button").addEventListener(
//     "click",
//     function(event) {
//       console.log(event.target.innerHTML + this.url);
//     }.bind({ url: "houdunren.com" })
//   );


// function Color(element) {
//   this.element = element;
//   this.color = ["#74b9ff", "#ffeaa7", "#fab1a0", "#fd79a8"];
//   this.run = function () {//用bind或箭头函数将this保留下来
//     console.log(this)
//     let self = this;
// 用bind将this保留下来
    // setInterval(function() {
    //   let i = Math.floor(Math.random() * this.color.length);
    //   this.element.style.backgroundColor = this.color[i];
    // }.bind(this), 2000);
// 用箭头函数将this保留下来
    // setInterval(()=> {
    //     let i = Math.floor(Math.random() * this.color.length);
    //     this.element.style.backgroundColor = this.color[i];
    //   }, 2000);
// 用变量self将this保留下来
//     setInterval(function() {
//         let i = Math.floor(Math.random() * self.color.length);
//         self.element.style.backgroundColor = self.color[i];
//       }, 2000);
//   };
// }
// let objn = new Color(document.body);
// objn.run();
Function.prototype.newCall = function(obj) {
    obj.new_func = this; //调用newcall的对象是函数foo，this指向函数。现在使obj上有了一个新方法foo
   console.log(this);
    let args = [];
    for(let i = 1; i < arguments.length; i++ )
        args.push(arguments[i])
    let result = obj.new_func(...args);
    delete obj.new_func
    return result;

    
}
function foo(x, y) {
    this.name = x;
    this.attr = y;
    return y;
}
let obj = {
    name: "obj_name"
}
console.log(foo.newCall(obj, "first", "second")) //=> second

let arr = [1, [2, [3, 4]]];
function flatten(arr) {
    let newArr = []
    arr = arr.toString().split(',')
    arr.forEach(item=>{
        newArr.push(Number(item))
        
    })
    return newArr;
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]