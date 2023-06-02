var flowers = ['peony','0', [ 'lily', 'rose', 'sunflower', 'tulip' ],'rose', '1', [ 'tulip', 'rose', 'sunflower', 'linaria' ],'sunflower', '2', [ 'Orchid', 'lily', 'sunflower', 'linaria' ],'linaria', '3', [ 'peony', 'rose', 'Daffudil','linaria']];
let flatFlowers = flowers.flat(4)

for (i = 0; i < flatFlowers.length; i++) {
  if (flatFlowers[i] === 0) {
      flatFlowers.splice(i, 1, 'Lotus')
  } else if (flatFlowers[i] === 1) {
      flatFlowers.splice(i, 1, 'Jasmine')
  } else if (flatFlowers[i] === 2) {
    flatFlowers.splice(i, 1, 'Daisy')
  } else if (flatFlowers[i] === 3) {
    flatFlowers.splice(i, 1, 'Iris')
  }

}


var newbday = flatFlowers.map(elem => {
  return elem.replace(/0|1|2|3/gi, 'Iris');
});

console.log(newbday);

let results = [];
let _func = (array)=>{
let sortedArray = array.flat(4).slice().sort();
let resultss = [];

for(let i=0; i<sortedArray.length; i++){
  if(sortedArray[i] == sortedArray[i + 1]){
    results.push(sortedArray[i]);
  }
}
 console.log(results);
 results.forEach(elem => {
   if(!resultss.includes(elem)){
     resultss.push(elem);
   }
 })
 console.log(resultss);
}
_func(flowers);


let a = [1,2,5,2,8,1];
// obj = {};

// for(let i of a){
//   obj[i] = true;
// }

// let b = Object.keys(obj);
// console.log(b);
