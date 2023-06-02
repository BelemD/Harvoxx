const prompt = require("prompt-sync")({sigint:true});
const fs = require('fs');

let user =[];
// let userData = [{
//   userInput: '',
//   userName: '',
//   userPin: '',
//   accountBalance: ''
// }];
user[4] = 0;

let userLogin = [{
  nameOfUser: '',
  pinOfUser: ''
}];

let cont;
let userInput;


function Select() {

  console.log('WELCOME TO UNITY BANK\n To Register type 1\n To Login type 2');
  userInput = parseFloat(prompt());

  switch (userInput) {
    case 1:
      signIn()
      break;
  
    case 2:
      login();
 
      break;
    default:
      console.log('Wrong Value');
      Select();
      break;
  } 
}

function options(){
  console.log('\nTo transfer type 1 \nTo Deposit type 2 \nTo withdraw type 3 \nFor topUp type 4\nTo check balance type 5');
  userInput = parseFloat(prompt(''));
  if(userInput === 1){
    Transfer();
    quit();
  }else if(userInput === 2){
    Deposit();
    quit();
  }else if(userInput === 3){
    withdrawal();
    quit();
  }else if(userInput === 4){
    TopUp();
    quit();
  }else if(userInput === 5){
    acctBalance();
    quit();
  }else{
    console.log('Pick the right number');
    quit();
  }
}

function _userName(){
  let userName = prompt('');
  user[0] = userName;

  if(userName !== " " && !isNaN(userName)){
    fs.writeFile('output.txt', userName + '\n', err => {
      if (err) console.error(err);
      //else console.log('Data written to file successfully');
    });
  }else{
    console.log('number');
  }
}

function _userPin(){
  let userPin = prompt();
  user[1] = userPin; 

  if(isNaN(userPin) || userPin == " " ){
    console.log('Incorrect password, please try again');
    _userPin();
  } else if(userPin.length === 4){
    console.log('Input eleven digit number');
  }
  else{
    var parsed = JSON.stringify(userPin);
  
    fs.appendFile('output.txt', parsed + "\n", function (err) {
    if (err) console.error(err);
    });
  }
 
}

function _userAddress(){

  let userAddress = prompt('');
  user[2] = userAddress;
  if(userAddress !== " "){
    fs.appendFile('output.txt', userAddress + "\n", function (err) {
      if (err) console.error(err);
  
      });
  }else{
    console.log('Please try again');
    _userAddress();
  }
     
}
function _dateOfBirth(){
  let dateOfBirth = prompt('');
  user[3] = dateOfBirth;
  if(dateOfBirth !== " "){
    fs.appendFile('output.txt', dateOfBirth + "\n", function (err) {
      if (err) console.error(err);
  
      });
  }else{
    console.log('Please try again');
    _dateOfBirth();
  }
 
}

function _email(){
  let email = prompt('');
  user[5] = email;
  if(email !== " " && !isNaN(email)){
    var parsed = JSON.stringify(email);
  
      fs.appendFile('output.txt', parsed + "\n", function (err) {
      if (err) console.error(err);
  
      });
  }else{
    console.log('Please try again');
    _email();
  }
}
function _phoneNum(){
  let phoneNum = prompt();
  user[6] = phoneNum;

  if(phoneNum.length === 11 && phoneNum !== ' ' && isNaN(phoneNum)){
    var parsed = JSON.stringify(phoneNum);
  
    fs.appendFile('output.txt', parsed + "\n", function (err) {
    if (err) console.error(err);
    });
  }else{
    console.log('Please input the correct phone number');
    _phoneNum();
  }

}
function _fullName(){
  let fullName = prompt('');
  user[7] = fullName;
  if(fullName !== " " && !isNaN(fullName)){
    var parsed = JSON.stringify(fullName);
  
    fs.appendFile('output.txt', parsed + "\n", function (err) {
    if (err) console.error(err);

    });
  }else{
    console.log('Please try again');
    _fullName();
  }

}
//Sign in function
function signIn(){
  console.log('Please input your username');
  _userName();

  console.log('Please input your full name');
  _fullName();

  console.log('Please input your four digit pin');
 _userPin();

  console.log('Please input your Address');
  _userAddress();

  console.log('Please input your Date of birth');
  _dateOfBirth();

  console.log('Please input your Email Address');
  _email();

  console.log('Please input your Phone number');
  _phoneNum();

  console.log('Welcome ' + user[0]);
  options();
}

//Login function
function login(){
  console.log('Please log in your details');
  console.log('Please input your username');
  userLogin.nameOfUser = prompt('');
  console.log('Please input your Pin');
  userLogin.pinOfUser = parseFloat(prompt(''));

  if(userLogin.nameOfUser === user[0] && userLogin.pinOfUser === user[1]){
    
    console.log('WELCOME ' + userLogin.nameOfUser);
    options();
  }
  else{
    console.log('Wrong user name and password \n Please Sign in');
    Select();
  }
  // var array = fs.readFileSync('output.txt').toString().split("\n");
  // console.log(array[1]);
}

function Deposit() {
  console.log('Please input the amount to deposit');
  let amount = parseInt(prompt());
  let presentBalance = user[4] + amount;

if(amount === Number && amount !== " "){
  user[4] = presentBalance;
  console.log('Your present account balance is ' + user[4]);
}else{
  console.log('Input the right digit');
  quit();
}
}

function Transfer(){
  console.log('Please input the amount to transfer');
  let amount = parseFloat(prompt());
  // let receiverAcctDetails = parseFloat(prompt());
  if(amount > user[4]){
    console.log('Insufficient Fund');
  }else if (amount !== Number && amount !== ""){
    console.log('Incorrect digit');
  }
  else{
    console.log('Transfer Succesful!');
    let presentBalance = user[4] - amount;
    console.log('Your present account balance is ' + user[4]);
    user[4] = presentBalance;
  }
}


function withdrawal() {
  console.log('Please input the amount to Withdraw');
  let amount = parseFloat(prompt());

  if(amount > user[4]){
    console.log('Insufficient Fund');
  }
  else if (amount !== Number && amount !== ""){
    console.log('Incorrect digit');
  }
  else{
    console.log('Withdrawal Succesful!');
    let presentBalance = user[4] - amount;
    user[4] = presentBalance;
    console.log('Your present account balance is ' + user[4]);
  }
}

function acctBalance(){
  console.log('Your account balance is ' + user[4]);
}

function TopUp() {
  console.log('For GLO type 1\nFor MTN type 2\nFor AIRTEL type 3');
  userInput = parseFloat(prompt());

  switch (userInput) {
    case 1:
      glo()
      break;
    case 2:
      mtn();
      break;
      case 3:
        airtel();
        break;
    default:
      console.log('Wrong Value');
      options();
      break;
  } 
}
let glo = () => {
  topFunc();
}
let mtn = () => {
  topFunc();
}
let airtel = () => {
  topFunc();
}
let topFunc = () => {
  console.log('For Data dail *131# \nFor Airtime dail *132#');
      let data = prompt('');
      if(data === '*131#'){

        console.log('Please input the amount');
        let amount = parseFloat(prompt());
        let presentBalance = user[4] - amount;
      
        user[4] = presentBalance;
      } else if(data === '*132#'){
    
        console.log('Please input the amount');
        let amount = parseFloat(prompt());
        let presentBalance = user[4] - amount;
      
        user[4] = presentBalance;
      }else{
        console.log('Wrong code');
      }
}
function quit() {

  console.log("To continue type 0\nTo Logout type 9\n");

  cont = parseInt(prompt(''));
  if (cont === 0) {
    login();
  }else if (cont === 9) {
    return "Goodbye";
    
  }else{
    console.log("Please pick a valid number \n");
    login();
  }
}

// fs.readFile('output.txt','utf8', (err, data) => {

//   if(err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const f = require('fs');
// const readline = require('readline');
// var user_file = './output.txt';
// var theLine = readline.createInterface({
//     input : f.createReadStream(user_file)
// });
// theLine.on('line', function (text) {
// //console.log(text[3,1]);
// });

// var array = fs.readFileSync('output.txt').toString().split("\n");


//   console.log(array[1]);

Select();

 


