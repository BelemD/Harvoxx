let costOfFood = 150;
let tipPercent = costOfFood * 15/100;
let taxPercent = costOfFood * 8/100;


let foodCost = () => {
  
 let totalCost = costOfFood + tipPercent + taxPercent;
 return totalCost > 100 ? console.log(Math.ceil(totalCost)) : console.log('Please recalculate');
}

foodCost();

// if(foodCost() > 100){
//   console.log(Math.floor(foodCost()));
// }else{
//   console.log('Please recalculate');
// }
 


