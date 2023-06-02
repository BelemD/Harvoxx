let hobbies = ['cleaning', 'cooking'];
console.log(hobbies.map(hobby => 'hobby: ' + hobby));

let array1 = [1,2,4,6];
const map1 = array1.map(x => x * 2);

console.log(map1);

var arr = [1.5, 2.5, 18.5, 20.3, 24.2];
var rounded = arr.map(Math.round);
console.log(rounded);

var birthday = ['14-05', '17-11', '25-12', '18-06', '31-01', '19-02', '03-03'];

var newbday = birthday.map(elem => {
  return elem.replace('-', '/');
});

console.log(newbday);