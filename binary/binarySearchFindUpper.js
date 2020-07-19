/**
 * 给定一个有序的数组，查找最接近 value 且大于等于 value 的数的下标（如果该数存在多个，返回第一个下标），不存在返回 - 1。
 * @param arr
 * @param n
 * @param value
 * @returns {number}
 */
function binarySearch(arr, n, value) {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let middle = left + ((right - left) >> 1);

    if (array[middle] >= value) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return array[right + 1] >= value ? right + 1 : -1
}


let array = [0, 0, 0, 320, 320, 320, 594, 594, 594, 594, 884, 884, 884, 884, 1187, 1187, 1187, 1187]
let value = 884

console.log(binarySearch(array, array.length, value))
