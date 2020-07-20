// 在n个记录中取某一个记录的键值为标准，通常取第一个记录键值为基准，
// 通过一趟排序将待排的记录分为小于或等于这个键值的两个独立的部分，这是一部分的记录键值均比另一部分记录的键值小，
// 然后，对这两部分记录继续分别进行快速排序，以达到整个序列有序

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let right = [], left = [], keys = arr.shift()
  for (let value of arr) {
    if (value > keys) {
      right.push(value)
    } else {
      left.push(value)
    }
  }

  return quickSort(left).concat(keys, quickSort(right))
}
