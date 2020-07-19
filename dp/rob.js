// 你是一个专业的小偷，计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额

// 动态规划方程：dp[n] = num + Max(dp[n-1])
// 由于不可以在相邻的房屋闯入，所以在当前位置 n 房屋可盗窃的最大值，要么就是 n-1 房屋可盗窃的最大值，要么就是 n-2 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值
// 举例来说：
// 1 号房间可盗窃最大值为 33 即为 dp[1]=3，
// 2 号房间可盗窃最大值为 44 即为 dp[2]=4，
// 3 号房间自身的值为 22 即为 num=2，
// 那么 dp[3] = MAX( dp[2], dp[1] + num ) = MAX(4, 3+2) = 5，3 号房间可盗窃最大值为 55

const rob = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return Math.max(dp[nums.length - 1], dp[nums.length - 2])
}

console.log(rob([67, 33, 1, 34])) // => 101
