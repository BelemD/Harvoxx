var details = ['apples', 'orange', 'grape', 'limes','pear','plum','mango', 'banana','strawberry','blueberry','watermelon','tomato','avocado',
'apricot','peach',2,4,6,8,10,12,14,16,18,20,22,24,26,1,3,5,7,9,11,13,15,17,19,21,23];
var filterData = details.filter((str) => {
  
  if(str > 5 && str % 2 !== 0){
    return str;
  }
});
 //console.log(filterData);

 var filterEvenData = details.filter((str) => {
  
  if(str > 8 && str % 2 == 0){
    return str;
  }
});
 //console.log(filterEvenData);

details.splice(0,15, 'Dein','Deinbo', 'Kate', 'Modinah','Richman');
console.log(details);

//Retrn back the element that are similar in both arrays