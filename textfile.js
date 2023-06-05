const fs = require('fs');
let data = ['Belem', 1144, '33rd Oriji', 'Aaron']
let myData = JSON.stringify(data);
// let userLogin = [{
//   nameOfUser: '',
//   pinOfUser: ''
// }];

//console.log('#' + data[0].accountBalance);

//console.log(myData);

fs.writeFile('output.txt', myData, err => {
  if (err) console.error(err);
   // else console.log('Data written to file successfully');

});
// fs.appendFile('output.txt', 'Belem' + "\n", function (err) {
//   if (err) console.error(err);

//   });

//   fs.appendFile('output.txt', 'Dein' + "\n", function (err) {
//     if (err) console.error(err);

//     });

// var array = fs.readFileSync('output.txt').toString().split("\n");
// console.log(array[0]);
//  const many = fs.readFile('output.txt', function(err, myData){
//    if(err)throw err;
//    var array = myData.toString().split("\n");
//      console.log(array[0]);
//  });