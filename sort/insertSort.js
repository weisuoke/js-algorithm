// 第i（i大于等于1）个记录进行插入操作时，R1、 R2，...，是排好序的有序数列，
// 取出第i个元素，在序列中找到一个合适的位置并将她插入到该位置上即可。

function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      while(j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = temp
    }
  }

  return arr;
}

console.log(insertSort([5, 3, 1, 6, 7, 2, 4, 8]))

