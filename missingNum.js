 //let arr = [5, 2, 1, 4];

 function missingNum(arr, n){
   let num = [];

   for(let i = 1; i <= n; i++) 
   if(!arr.includes(i)) num.push(i)
     return num;

 }
 //console.log(missingNum([9, 1, 2, 8, 5, 7, 10], 10));




// let arr = [5, 2, 1, 4];;

//  function arrays(str){
//   let n = arr.length;
  
//   let firstValue = ((n + 2) * (n+1))/2;
//   // let secondValue = ((n + 3) * (n+2) + (n - 5))/2;
//   // let total = ((n + 3) * (n + 2) +( n - 1))/2;
//   // let arr2;
  
//   for(let i = 0; i < n; i++){
//     // total -= arr[i]; secondValue -= arr[i];  
//     firstValue -= arr[i];
//     //  arr2 = [firstValue, secondValue, total]
//   }
//   return firstValue; 
//  }
// console.log(arrays(arr));

