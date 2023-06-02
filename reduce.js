// const summer = ['Jun', 'Jul', 'Aug'];
// const winter = ['Dec', 'Jan', 'Feb'];
// const nested = [ summer, winter ];

// const flat = [...summer, ...winter];
// console.log(flat);

//Reduce Method

var arr = [4, 2, 3, 1, 6, 7, 8, 9];
var result = arr.reduce((acc,num) => {return acc.concat(num*2)},[]
);
//console.log(result);


arr.reduce((accumulator, currentValue, index) =>arr[index] = arr[index] * 2,[]);
console.log(arr);

