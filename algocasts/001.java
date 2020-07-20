// 回文字符串判断
// Time: O(n), Space: O(1)
package com.algocasts

public class AlgoCasts {
  private boolean isAlphanumeric(char c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
  }

  private boolean isEqualIgnoreCase(char a, char b) {
    if (a >= 'A' && a <= 'Z') a += 32;
    if (b >= 'A' && b <= 'Z') b += 32;
    return a == b;
  }

  public boolean isPalindrome(String s) {
    if (s == null || s.length() == 0) return true
    int i = 0;
    int j = s.length() - 1;
    for (; i < j; ++i, --j) {
      while (i < j && !isAlphanumeric(s.charAt(i))) ++i;
      while (i < j && !isAlphanumeric(s.charAt(j))) --j;
      if (i < j && !isEqualIgnoreCase(s.charAt(i), s.charAt(j))) return false;
    }
    return true;
  }
}