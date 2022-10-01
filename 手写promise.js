class HD {
  // 1.三种状态写进静态
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(executor) {
    // 2.属性：状态/值/回调队列
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
      // ps:类默认在严格模式运行，this必须绑定对象,如果不绑定this会指向undefined
    } catch (error) {
      this.reject(error);
      // 报错就catch
    }
  }
  // 3.方法：resolve，reject
  resolve(value) {
    // 改变状态、传值（状态只能改变一次,加if判断）、异步回调
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(this.value);
        });
      });
    }
  }
  reject(reason) {
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(this.value);
        });
      });
    }
  }

  // 4.构建then
  then(onFulfilled, onRejected) {
    // 不传函数设置为value，避免报错实现穿透
    if (typeof onFulfilled != "function") {
      onFulfilled = () => this.value;
    }
    if (typeof onRejected != "function") {
      onRejected = () => this.value;
    }
    return new HD((resolve, reject) => {
      // then传入两个函数,resolve执行第一个,reject执行第二个
      if (this.status == HD.FULFILLED) {
        // 保证异步执行
        setTimeout(() => {
          // 异常捕获
          try {
            onFulfilled(this.value);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status == HD.REJECTED) {
        setTimeout(() => {
          try {
            onRejected(this.value);
          } catch (error) {
            reject(error);
          }
        });
      }
      // 异步改变状态,需要回调队列
      if (this.status == HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
        });
      }
    });
  }
}

let p = new HD((resolve, reject) => {
  setTimeout(() => {
    // resolve('1')
    console.log("4");
  });
  //   resolve('1')
  reject("2");
})
  .then(
    (value) => {
      // console.log(value);
      return "p1";
    },
    (reason) => {
      console.log(abc);
      return "p2";
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log("111error:" + reason);
    }
  );
console.log(3);
