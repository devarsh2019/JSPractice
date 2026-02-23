function longestPalindrome(value) {
  let start = 0;
  let maxLength = 0;

  function expand(left, right) {
    while (left >= 0 && right < value.length && value[left] === value[right]) {
      left--;
      right++;
    }

    return right - left - 1;
  }

  for (let i = 0; i < value.length; i++) {
    let len1 = expand(i, i);
    let len2 = expand(i, i + 1);
    let len = Math.max(len1, len2);

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  console.log(value.substring(start, start + maxLength));
}

longestPalindrome("bananas");
