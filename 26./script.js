function longestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  let longest = "";

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      longest = str.substring(left, right + 1);
    }
  }

  console.log(longest);
}

longestSubstring("abcabcbb");
