function findMaxNumber(a, b, c, d) {
  const arr = [a, b, c, d];
  let max = a;
  for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i] !== 'number')){
          return 0;
      }
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max;
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));