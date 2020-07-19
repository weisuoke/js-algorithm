// 爬楼梯

// 有一个楼梯，你一次只能往上走一阶或者两阶。请编写函数 climbStairs，它接受一个整数 n 作为参数，表示这个楼梯有多少阶。请你返回一个整数，表示这个楼梯一共有多少种走法

// climbStairs(1) // => 1
// climbStairs(2) // => 2
// climbStairs(3) // => 3
// climbStairs(10) // => 89

// dp[0] = 0
// dp[1] = 1
// dp[2] = 2
// dp[n] = dp[n - 1] + dp[n - 2] // 到达第n阶楼梯有从n-1阶走一步和从第n-2阶走两步两种情况

const climbStairs = (n) => {
  let dp = []
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[n]
}

console.log(climbStairs(10))
