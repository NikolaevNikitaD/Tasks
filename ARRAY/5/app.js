let arr = [1, 2, [3, 4, [5]]];

arr = arr.reduce((a, b) => a.concat(b), []).reduce((a, b) => a.concat(b), []);
console.log(arr)