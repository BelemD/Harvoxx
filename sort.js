let arr = [1, [2, 3], [[]], 19, [21, 7, 5, [4, [5],], 6]];
let arr2 = ['mango', 'apple', 'banana', 'madam', 'bear', 'meal', 'civic', 'anna', 'mom', 'sis', 'tenet', 'pat', 'meme', 'farm'];

// let arrLength = arr2.length;



for(let i = 0; i < 14; i++){
  arr[i] = arr2[i];

  console.log(arr);
}
arr.sort();
console.log(arr);
