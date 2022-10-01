{
    // let promise = new Promise((resolve, reject) => {
    //     resolve("fulfilled");
    //     console.log("后盾人");
    //   });
    //   promise.then(msg => {
    //     console.log(msg);
    //   });
    //   console.log("houdunren.com");
        //      后盾人
        //      promise.js:9 houdunren.com
        //      promise.js:7 fulfilled

    // const promise = new Promise(resolve => resolve("success"));
    // promise.then(alert);
    // alert("houdunren.com");
    // promise.then(() => {
    // alert("后盾人");
    // }); 

    // new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("fulfilled");
    //     }, 3000);
    //   }).then(
    //     msg => {
    //       console.log(msg);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );

    // const p1 = new Promise((resolve, reject) => {
    //     resolve(
    //         //p2
    //       new Promise((s, e) => {
    //         s("成功");
    //       })
    //     );
    //   }).then(msg => {
    //     console.log(msg);
    //   });
    //   const p2 = new Promise(resolve => {
    //     resolve(p1);
    //   }).then(
    //     value => {
    //       console.log(value);
    //     },
    //     reason => {
    //       console.log(reason);
    //     }
    //   );

    // const p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("操作成功");
    //     }, 2000);
    //   });
    //   const p2 = new Promise((resolve, reject) => {
    //     resolve(p1);
    //   }).then(
    //     msg => {
    //       console.log(msg);
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // let p1 = new Promise(resolve => {
    //     resolve();
    //   });
    //   let p2 = p1.then(() => {
    //     return new Promise(r => {
    //       r("houdunren.com");
    //     });
    //   });
    //   p2.then(v => {
    //     console.log(v); //houdunren.com
    //   });
    // //   console.log(p1); // Promise {<resolved>}
    // //   console.log(p2); // Promise {<pending>}
      
    // //   # 再试试把上面两行放在 setTimeout里
    //   setTimeout(() => {
    //     console.log(p1); // Promise {<resolved>}
    //     console.log(p2); // Promise {<resolved>}
    //   });
//     let promise = new Promise(resolve => resolve());
// let p1 = promise.then(() => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`p1`);
//       resolve();
//     }, 2000);
//   });
// }).then(() => {
//   return new Promise((a, b) => {
//     console.log(`p2`);
//   });
// });
new Promise((resolve, reject) => {
    resolve(
      class {
        static then(resolve, reject) {
          setTimeout(() => {
            resolve("解决状态");
          }, 2000);
        }
      }
    );
  }).then(
    v => {
      console.log(`fulfilled: ${v}`);
    },
    v => {
      console.log(`rejected: ${v}`);
    }
  );

}