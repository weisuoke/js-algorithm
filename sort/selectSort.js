// 在第i次选择操作中，通过n-i次键值间比较，从n-i+1个记录中选出键值最小的记录，
// 并和第i（1小于等于1小于等于n-1）个记录交换

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr.slice(i));
    let index = arr.indexOf(min);
    [arr[i], arr[index]] = [arr[index], arr[i]]
  }

  return arr;
}

console.log(selectSort([5, 3, 1, 6, 7, 2, 4, 8]))
