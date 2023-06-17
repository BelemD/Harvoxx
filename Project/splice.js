//3 decimal, 4 odd , 6 even using slice to return the even numbers or odd umbers that are in the decimal 
 let arr = [1.5, 9.4, 3.6, 11, 23, 57, 2, 4, 6,8, 22, 80, ['c', 'o','d', 'e'], ['m', 'u', 'm'],['f','o','u','r']];

//  for(let i = 0; i< arr.length; i++){
//    let even = [];
//    if(arr[i] % 2 === 0){
//     even.push(arr[i]);
//    }
//    //console.log(even)
//  }

let arrJoin = [arr[12].join('')];
let arrJoin1 = [arr[13].join('')];
let arrJoin2 = [arr[14].join('')];

let concated = (arrJoin.concat(arrJoin1, arrJoin2));
console.log(concated)

arr.splice(12,3,concated)
let flattened = arr.flat();

console.log(flattened)
let filtered = flattened.filter((str) => {
  if(str % 2 ===  0) {
    console.log(str);
  }
})


