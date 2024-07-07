/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case: if the array is empty, return 1 (multiplicative identity).  This is the condition under which the recursion stops. It's a scenario where the problem can be solved directly without further recursion. The base case prevents infinite recursion by providing a simple, non-recursive solution that ends the recursive calls. In the provided `product` function, the base case is when the array `nums` is empty (`nums.length === 0`), at which point the function returns `1`, the multiplicative identity, effectively ending the recursion.
  if (nums.length === 0) {
    return 1;
  }
  // Recursive case: multiply the first element by the product of the rest of the array.  This is the part of the function where the recursion actually occurs. It involves calling the same function with a subset of the original problem, moving it closer to the base case. The recursive case breaks down the problem into smaller instances of itself, each time moving towards the base case. In the `product` function, the recursive case is `return nums[0] * product(nums.slice(1));`, where the function calls itself with the rest of the array (`nums.slice(1)`) until it reaches the base case.
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: if the array has only one word, return its length
  if (words.length === 1) {
    return words[0].length;
  }
  // Recursive case: compare the length of the first word with the length of the longest word in the rest of the array
  const restLongest = longest(words.slice(1));
  return Math.max(words[0].length, restLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  // Base case: if the index is out of bounds, return an empty string
  if (index >= str.length) {
    return '';
  }
  // Recursive case: return the current character and skip the next one
  return str[index] + everyOther(str, index + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  // Base case: if the start index is greater than or equal to the end index, the string is a palindrome
  if (start >= end) {
    return true;
  }
  // If the characters at the start and end index are not the same, the string is not a palindrome
  if (str[start] !== str[end]) {
    return false;
  }
  // Recursive case: move towards the center of the string
  return isPalindrome(str, start + 1, end - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // Base case 1: if the index is out of bounds, return -1
  if (index >= arr.length) {
    return -1;
  }
  // Base case 2: if the element at the current index matches the value, return the index
  if (arr[index] === val) {
    return index;
  }
  // Recursive case: move to the next index
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string is empty, return an empty string
  if (str === "") {
    return "";
  }
  // Recursive case: return the last character plus the reverse of the substring excluding the last character
  return str.charAt(str.length - 1) + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArray = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArray.push(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      stringsArray = stringsArray.concat(gatherStrings(obj[key]));
    }
  }

  return stringsArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function search(left, right) {
    if (left > right) return -1; // Value not found

    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) return mid; // Value found

    if (arr[mid] > val) return search(left, mid - 1); // Search left half
    else return search(mid + 1, right); // Search right half
  }

  return search(0, arr.length - 1); // Initial call to the recursive function
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
