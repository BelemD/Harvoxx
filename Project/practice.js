const prompt = require("prompt-sync")({sigint:true});
//const { sign } = require("crypto");
const fs = require('fs');
/*let userData = fs.readFile('atmData.json','utf8', (err, data) => {

  if(err) {
    console.error(err);
    return;
  }
  console.log(data);
});*/

let user = {
  userName: "",
  userPin: "",
  email: "",
  phoneNum: "",
  acctBalance: 0,
  dateOfBirth: "",
  fullName: "",
  userAddress: "",
  isLoggedIn: false,
};

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
  if(userName === " " && isNaN(userName)){
    console.log(`This field should not be empty neither should it have numbers`);
  }else{
    user.userName =userName;
  }
  
}

function _userPin(){
  let userPin = prompt();
 

  if(!isNaN(userPin) && userPin == " " ){
    console.log('Incorrect password, please try again');
    _userPin();
  } else if(userPin.length > 4){
    console.log('Input four digit password');
  }
  else{
    user.userPin = userPin; 
  }
 
}

function _userAddress(){

  let userAddress = prompt('');
 
  if(userAddress !== " "){
    user.userAddress = userAddress;
  }else{
    console.log('Please try again');
    _userAddress();
  }
     
}
function _dateOfBirth(){
  let dateOfBirth = prompt('');
  
  if(dateOfBirth === " "){
    
    console.log('Please try again');
    _dateOfBirth();
  }else{
    user.dateOfBirth = dateOfBirth;
  }
 
}

function _email(){
  let email = prompt('');
 
  if(email === " " && isNaN(email)){
    console.log('Please try again');
    _email();
  }else{
    user.email = email;
  }
}
function _phoneNum(){
  let phoneNum = prompt();

  if(phoneNum.length > 11 && phoneNum === ' ' && !isNaN(phoneNum) && phoneNum.length < 11){
   
    console.log('Please input the correct phone number');
    _phoneNum();
  }else{
    user.phoneNum = phoneNum;
  }

}
function _fullName(){
  let fullName = prompt('');

  if(fullName === " " && isNaN(fullName)){
    console.log('Please try again');
    _fullName();
  }else{
    user.fullName = fullName;
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

  console.log('Welcome ' + user.userName);
 
  confirmData();
  options();
}

let confirmData = () => {
let confirmUser = parseInt(prompt("To confirm data, type 1. To restart registration type 2\n")) ;

if(confirmUser === 1){
  //userData.push(User);
  fs.writeFileSync("atmData.json", JSON.stringify(user));
        console.clear();
        console.log(
          `Congratulations You have succefully registered`
        );

        console.clear();
        
    options();
}else if(confirmUser === 2){
  console.clear();
signIn();
} else{
  console.log(`Please input a valid number`);
  confirmData();
}
}


//Login function
function login(){
  console.log('Please log in your details');
  let nameOfUser = prompt('Please input your username: ');

  let pinOfUser = parseFloat(prompt('Please input your Pin: '));

  const users = userData.find(
    (users) => users.userName === nameOfUser && users.userPin === pinOfUser
  );
  if(users){

    users.isLoggedIn = true;
    console.clear();
      console.log('WELCOME ' + nameOfUser);
      options();
  }else{
    console.log("Invalid Username or Password");
    login();
  }
  }


function Deposit() {
  console.log('');
  let amount = parseInt(prompt('Please input the amount to deposit: '));

  let presentBalance = user.acctBalance + amount;

if(isNaN(amount) && amount !== " "){
  user.acctBalance = presentBalance;
  console.log('Your present account balance is ' + user.presentBalance);
}else{
  console.log('Input the right digit');
  quit();
}
}

function Transfer(){
  console.log('');
  let amount = parseFloat(prompt('Please input the amount to transfer: '));
  if(amount > user.acctBalance){
    console.log('Insufficient Fund');
  }else if (amount !== Number && amount !== ""){
    console.log('Incorrect digit');
  }
  else{
    console.log('Transfer Succesful!');
    let presentBalance = user.acctBalance - amount;
    console.log('Your present account balance is ' + user.acctBalance);
    user.acctBalance = presentBalance;
  }
}


function withdrawal() {
  console.log('Please input the amount to Withdraw');
  let amount = parseFloat(prompt());

  if(amount > user){
    console.log('Insufficient Fund');
  }
  else if (amount !== Number && amount !== ""){
    console.log('Incorrect digit');
  }
  else{
    console.log('Withdrawal Succesful!');
    let presentBalance = user.acctBalance - amount;
    user.acctBalance = presentBalance;
    console.log('Your present account balance is ' + user.acctBalance);
  }
}

function acctBalance(){
  console.log('Your account balance is ' + user.acctBalance);
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
        let presentBalance = user.acctBalance - amount;
      
        user.acctBalance = presentBalance;
      } else if(data === '*132#'){
    
        console.log('Please input the amount');
        let amount = parseFloat(prompt());
        let presentBalance = user.acctBalance - amount;
      
        user.acctBalance = presentBalance;
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

 


