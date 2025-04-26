class Solution {
  reverseWords(s: string): string {
    let res: string = "";
    let l: number = 0,
      r: number = 0;

    while (r < s.length) {
      if (s[r] !== " ") {
        r += 1;
      } else {
        res += s.substring(l, r).split("").reverse().join("");
        r += 1;
        l = r;
      }
    }
    res += " ";

    res += s
      .substring(l, r + 1)
      .split("")
      .reverse()
      .join("");

    return res.substring(1);
  }
}

const solution = new Solution();
console.log(solution.reverseWords("Car super cool"));
