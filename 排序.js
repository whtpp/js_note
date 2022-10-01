// 归并排序 （nlogn） 递归不断先分成两个数组进行内部排序，再合并
{
    let arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
    let mergeSort = function(arr){
        if(arr.length<2){
            return arr;
        } 
        let  l = 0;
        let r = arr.length;
        let mid =l + (r-l)>>1;
        // let mid =l + Math.floor((r-l)/2);
        let leftArr = arr.slice(0,mid);
        let rightArr = arr.slice(mid);
        return merge(mergeSort(leftArr),mergeSort(rightArr));
    }
    let merge = function(leftArr,rightArr){
        let res = [];
        while(leftArr.length&&rightArr.length){
            if(leftArr[0]<=rightArr[0]){
                res.push(leftArr.shift());
            }else{
                res.push(rightArr.shift());
            }
        }
        while(leftArr.length){
            res.push(leftArr.shift());
        }
        while(rightArr.length){
            res.push(rightArr.shift());
        }
        return res;
    }   
    console.log(mergeSort(arr));   
}
//快速排序 O(nlogn)任意选择一个目标值，递归小的放左边，大的放右边
{
    const _quickSort = array => {
        let quickSort = function(arr){
            if(arr.length<2) return arr;
            let goal = arr[0];
            let minArr = arr.slice(1).filter(item=>item<goal);
            let maxArr = arr.slice(1).filter(item=>item>=goal);
            return quickSort(minArr).concat([goal]).concat(quickSort(maxArr));
        }
        return quickSort(array);    
    }
    // console.log(_quickSort([2,3,1,2,5]));
}
//希尔排序 O(nlogn)
{
    let arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
    function shellSort(arr) {
        let len = arr.length;
        for (let gap = Math.floor(len / 2); gap >=1; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < len; i++) {
            let j = i;
            while(j - gap >= 0 && arr[j] < arr[j - gap]) {
                [arr[j],arr[j-gap]] = [arr[j - gap],arr[j]];
                j = j - gap;
            }
          }
        }
        return arr;
      }
    // console.log(shellSort(arr));
}
//冒泡排序 O(n^2)
{
    let arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
    function bubleSort(arr) {
        let len = arr.length;
        for (let i=0; i<len-1; i++) {
          for (let j=0; j < len-1-i; j++) {
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }   
          }
        }
        return arr;
      }
    // console.log(bubleSort(arr));
}
//选择排序 O(n^2)
{
    let arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
    function selectionSort(arr) {
        let len = arr.length;
        let minIndex = 0;
        for (let i=0; i<len; i++) {
            minIndex = i;
            for (let j=i+1; j < len-1; j++) {
                if(arr[j]<arr[minIndex]){
                    minIndex = j;    
            }   
          }
           [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
        }
        return arr;
      }
    // console.log(selectionSort(arr));
}
//插入排序 O(nlogn)
{
    let arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
    function insertionSort(arr) {
        let len = arr.length;
        let goal;
        let j;
        for (let i=1; i<len-1; i++) {
            goal = arr[i];//保存对比目标变量
            j = i - 1;
            while(j>=0&&arr[j]>goal){//在已排序好的队列从后向前寻找
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = goal;   
        }
        return arr;
      }
    // console.log(insertionSort(arr));
}