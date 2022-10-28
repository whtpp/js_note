// function a(xx){
//     this.x = xx;
//     return this
//   };
//   var x = a(5);
//   var y = a(6);

//   console.log(x.x)  // undefined
//   console.log(y.x)  // 6
{
  var a = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,1)
  })
  // console.log(a)
}


