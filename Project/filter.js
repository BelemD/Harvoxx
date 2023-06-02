var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var filterData = arr.filter((str) => {
  if(str > 5){
    return str;
  }
});

console.log(filterData);