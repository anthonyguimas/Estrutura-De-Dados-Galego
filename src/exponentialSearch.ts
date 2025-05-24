function binarySearchs(
  nums: number[],
  n: number,
  lo: number,
  hi: number
): number {
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

function exponentialSearch(arr: number[], target: number) {
  if (arr[0] == target) {
    return 0;
  }

  let n = arr.length;
  let i = 1;

  while (i < n && arr[i] < target) {
    i *= 2;
  }

  if (arr[i] == target) {
    return 1;
  }

  if (i < n && arr[i] == target) {
    return i;
  }

  return binarySearchs(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(exponentialSearch(sortedArray, 7));
console.log(exponentialSearch(sortedArray, 20));
