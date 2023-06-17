const prompt = require("prompt-sync")({sigint:true});
//const { sign } = require("crypto");
const fs = require('fs');
const userData = JSON.parse(fs.readFileSync('atmData.json', 'utf8'))
 



let user = {
  fullName: "",
  userName: "",
  userPin: "",
  email: "",
  phoneNum: "",
  userAddress: "",
  dateOfBirth: "",
  acctBalance: 0,
  isLoggedIn: false
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
  if(userName == "" && isNaN(userName)){
    console.log(`This field should not be empty neither should it have numbers`);
  }else{
    user.userName = userName;
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
 
  if(userAddress === " "){
    console.log('Please try again');
    _userAddress();
  }else{
    user.userAddress = userAddress;
  
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
  let email = prompt('Input your Email address: ');
 let char1 = '@';  let char2 = '.com';
  if(email === " " && isNaN(email)){
    console.log('Please try again');
    _email();
  }else if(!email.includes(char1) && !email.includes(char2)){
    console.log(`Invalid Email, please try again`)
    _email();
  }
  else{
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
  userData.push(user);
  fs.writeFileSync("atmData.json", JSON.stringify(userData));
        console.clear();
        console.log(
          `Congratulations You have succefully registered`
        );

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
  console.log("---------- DEPOSIT -----------");
  console.log('Please log in your details');
  let nameOfUser = prompt('Please input your username: ');

  let pinOfUser = prompt('Please input your Pin: ');

  const users = userData.find(users => users.userPin === pinOfUser && users.userName === nameOfUser);
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
  const users = userData.find(users => users.isLoggedIn);
  
  if(users){
    let amount = parseInt(prompt('Please input the amount to deposit: '));
    
    checkAmount(amount);
    let checkAmount = (amount) => {
      if(isNaN(amount) === true){
        console.log(`Invalid Input`);
        contiNue();
      }else if(amount <= 0){
        console.log('Invalid Input');
        contiNue();
      }else{
        userData.push(users.acctBalance += amount)
        fs.writeFileSync("atmData.json", JSON.stringify(userData));
        console.log(`You have successfully made a deposit of #${amount}`);
        contiNue();
      }
    }
  }
  let contiNue =() => {
    let num = prompt(`Type 1 to make another deposit, for all options type 2`)
  if(num === 1){
    console.clear();
    Deposit();
  }else if(num === 2){
    console.clear();
    options();
  }else{
    console.log("Please type a valid number")
    contiNue();
  }
  }

}

function Transfer(){
  console.log("---------- TRANSER -----------");
  const users = userData.find((users) => users.isLoggedIn);
  if (users) {
    let amount = parseFloat(prompt('Please input the amount to transfer: '));
    checkAmount(amount);
    let checkAmount = (amount) => {
    if(isNaN(amount)){
      console.log( `Invalid Input`)
      contiNue();
    }else if(user.acctBalance < amount){
      console.log( `Insuffient fund`)
      contiNue();
    }else{
      let input = prompt(`Input Recipient username`)
      const checkInput = userData.find( checkInput => checkInput.userName === input && !checkInput.isLoggedIn);

      if(checkInput){
        console.log(` User ${checkInput.fullName} found`);
        checkTransDetails();
        let checkTransDetails = () => {
          console.log("---------CONFIRM TRANSFER---------");
          console.log(`Transaction Type: Inter-User`);
          console.log(`Source Name: ${users.fullName}
          Recipient Account number: ${checkAmount.fullName} 
          `)
        console.log(`Transaction Amount ${amount}`)

        let finalTransaction = prompt(`Type 1 to confirm transaction \n Type 2 to cancel: `)
        if(finalTransaction === 1){
          let retry = true;
          let failure = 0;
          while(retry){
            let pin = prompt("Please enter your password")
            if(user.userPin == pin){
              userData.push(users.acctBalance -= amount)
              userData.push(checkInput.acctBalance += amount)

              fs.writeFileSync("atmData.json", JSON.stringify(userData));
              console.log(`Your transaction was successful ${amount} to ${checkInput.fullName}`)
              contiNue();
              break;
            }else{
              failure++
              if(failure <= 2){
                console.log(`Incorrect Password, You will be logged out after 3 failed attempts 
                You have ${3 - failure} attempts`);
                retry = true;
              }else{
                console.log(`Maximum attempt reached`)
                quit();
                break;
              }
            }
          }

        }else if(finalTransaction === 2){
          
        }

        }
      }
    }
  }
  }

  let contiNue =() => {
    let num = prompt(`Type 1 to make another deposit, for all options type 2`)
  if(num === 1){
    console.clear();
    Transfer();
  }else if(num === 2){
    console.clear();
    options();
  }else{
    console.log("Please type a valid number")
    contiNue();
  }
  }
}


function withdrawal() {
  console.log('Please input the amount to Withdraw');
  let amount = parseFloat(prompt());

  if(amount > user){
    console.log('Insufficient Fund');
  }
  else if (amount !== Number || amount !== ""){
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

 


