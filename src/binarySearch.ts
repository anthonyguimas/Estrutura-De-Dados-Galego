function binarySearch(nums: number[], n: number): number {
  let lo: number = 0;
  let hi: number = nums.length;
  let steps: number = 0;

  while (lo < hi) {
    steps += 1;
    let mid: number = Math.floor((lo + hi) / 2);

    if (nums[mid] === n) {
      console.log("step: ", steps);
      return mid;
    } else if (nums[mid] < n) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(array, target);
console.log("Índice encontrado:", result);
