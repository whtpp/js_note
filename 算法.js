// 复原ip地址
{
  let nums = "101023";
  let path = [];
  let res = [];
  let len = nums.length;
  let valid = function (start, end) {
    let str = nums.slice(start, end + 1);
    if (str[0] === "0" && str.length === 1) return true;
    if (str[0] === "0" && str.length != 1) return false;
    if (str * 1 > 255) return false;
    return true;
  };
  let backTracking = function (nums, index) {
    if (index >= len && path.length === 4) {
      let pathStr = path.join(".");
      res.push(pathStr);
      return;
    }
    for (let i = index; i < len; i++) {
      if (len - index > (4 - path.length) * 3) {
        continue;
      }
      if (valid(index, i)) {
        path.push(nums.substr(index, i - index + 1));
      } else {
        continue;
      }
      backTracking(nums, i + 1);
      path.pop();
    }
  };
  backTracking(nums, 0);
  // console.log(res);
}
//递增子序列
{
  let nums = [1, 2, 1, 1, 1];
  let res = [];
  let path = [];
  let backTracking = function (nums, index) {
    if (path.length >= 2) {
      res.push([...path]);
    }
    let used = []; //每次回溯先置空
    for (let i = index; i < nums.length; i++) {
      if (i > 0 && used.includes(nums[i])) {
        //不能对数组排序又不能使用重复同层元素时
        continue;
      } else if (nums[i] < path[path.length - 1]) {
        continue;
      }
      used.push(nums[i]); //将使用过的推入used中
      path.push(nums[i]);
      backTracking(nums, i + 1);
      path.pop();
    }
  };
  backTracking(nums, 0);
  // console.log(res);
}
{
  let n = 1,
    k = 1;
  let path = [];
  let res = [];
  let backTracking = function (n, k, startIndex) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      backTracking(n, k, i + 1);
      path.pop();
    }
  };
  backTracking(n, k, 1);
  // console.log(res);
}
{
  let nums = [6,4,3]
  let res = [];
  let right;
  for(let i=0;i<nums.length;i++){
      if(i===nums.length-1){
        right = 0;
      }else{
        right = i + 1;
      }
      
      while(nums[right]<=nums[i]&&right!=i){
          right++;
          if(right===nums.length){
              right = 0;
          }
      }
      if(nums[right]>nums[i]){
        res[i] = nums[right];
      }else{
        res[i] = -1;
      }
      
  }
  // console.log(res);
}
//字符串全排列 
{
  const _permute = string => {
    let res = [];
    let path = [];
    let used = [];
    let backTracking = function(string,used){
      if(path.length===string.length){
        res.push(path.join(''));
        return;
      }
      for(let i=0;i<string.length;i++){
        if(used[i]) continue;
        path.push(string[i]);
        used[i] = 1;
        backTracking(string,used);
        used[i] = 0;
        path.pop();
      }  
    }
    backTracking(string,used);
    return res;
} 
// console.log(_permute('abc'));
}


//两数之和（哈希法）
{
  let numbers = [3,2,4],target = 6;
  function twoSum( numbers ,  target ) {
    let map = new Map();
    let l,r;
    for(let i=0;i<numbers.length;i++){
        if(map.has(target-numbers[i])){
            l = i+1;
            r = map.get(target-numbers[i]);
            break;
        }else{
            map.set(numbers[i],i+1);
        }
    }
    return [l,r];
}
// console.log(twoSum(numbers,target))
}

