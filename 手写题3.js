// 手写ajax
{
  function getJSON(url) {
    let promise = new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      // 新建一个 http 请求
      xhr.open("GET", url, true);
      // 设置状态的监听函数
      xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        // 当请求成功或失败时，改变 promise 的状态
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      // 设置错误监听函数
      xhr.onerror = function () {
        reject(new Error(this.statusText));
      };
      // 设置响应的数据类型
      xhr.responseType = "json";
      // 设置请求头信息
      xhr.setRequestHeader("Accept", "application/json");
      // 发送 http 请求
      xhr.send(null);
    });
    return promise;
  }
}
//创建lazyMan
{
  function LazyMan(name, logFn) {
    let taskList = []
    let fn = ()=>{
      logFn(`Hi, I'm ${name}.`)
      next()
    }
    let next = ()=>{
      let fn = taskList.shift()
      fn&&fn()
    }
    taskList.push(fn)
    setTimeout(()=>{
      next()
    })
    let obj = {
      sleepFirst:(time)=>{
        taskList.unshift(()=>{
          setTimeout(()=>{
            if(time==1){
              logFn(`Wake up after 1 second.`)
            }else{
              logFn(`Wake up after ${time} seconds.`)
            }
            next()
          },time*1000)
        })
        return obj
      },
      sleep:(time)=>{
        taskList.push(()=>{
          setTimeout(()=>{
            if(time==1){
              logFn(`Wake up after 1 second.`)
            }else{
              logFn(`Wake up after ${time} seconds.`)
            }
            next()
          },time*1000)
        })
        return obj
      },
      eat:(value)=>{
        taskList.push(()=>{
          logFn(`Eat ${value}.`)
          next()
        })
        return obj
      },
    }
    return obj
  }
  LazyMan('Jack', console.log).eat('banana').sleepFirst(10).eat('apple').sleep(1)
}
//实现promise.all
{
  function all(promises) {
    return new Promise((resolve,reject)=>{
      if(!promises||promises.length==0){
        resolve([])
      }else{
        let index = 0;
        let res = [];
        let len = promises.length;
        for(let i=0;i<len;i++){
          Promise.resolve(promises[i]).then(value=>{
            res[i] = value
            if(++index==len){
              return resolve(res)
            }
          },error=>{
            return reject(error)
          })
        }
      }    
    })
  }
}
//实现promise.race
{
  function race(promises) {
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++){
        promises[i].then(resolve,reject)
      }
    })
  }
}
//函数柯里化
{
  function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
  }
}