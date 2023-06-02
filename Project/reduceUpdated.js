var nums = [1,2,3,4,5,6,7,8,];
var sum = nums.reduce(function (preVal, currVal,curInd, OrgArr){
  return preVal + currVal;
});

console.log(sum);