const prompt = require("prompt-sync")({sigint:true});
const fs = require('fs');
const { parse } = require("path");

let newStudent ={
  studentName: '',
  phoneNumber: '',
  homeAddress: '',
  emailAddress: '',
  dateOfBirth: '',
  userName: '',
  userID: '',
  gender: '',
  isLoggedin: false,
  password: '',
  firstName: '',
  lastName: '',
  middleName: ''
}

function _email(){
  console.log(`Please input your email address: `);
  let email = prompt();
 let char1 = '@';  let char2 = '.com';
  if(emailAddress === " " && isNaN(email)){
    console.log('Please try again');
    _email();
  }else if(!emailAddress.includes(char1) && !emailAddress.includes(char2)){
    console.log(`Invalid Email, please try again`)
    _email();
  }
  else{
    newStudent.emailAddress = email;
  }
}

function _dateOfBirth(){
  let dateOfBirth = (prompt('please use this format, dd/mm/yyyy: '));
  let replaceDate = parseInt(dateOfBirth.replace(/[/]/g, ''))
  let charc = '/'; 
  if(dateOfBirth === " "){
    
    console.log('Invalid Input');
    cont();
  }else if(dateOfBirth.length > 10){
    console.log('Invalid Input');
    cont();
  }else if(!isNaN(dateOfBirth)){
    console.log('Invalid Input');
    cont();
  }
  else if(dateOfBirth.length == 10 && dateOfBirth.includes(charc)){
    newStudent.dateOfBirth = replaceDate;
    
    cont();
  }else{
    console.log(`Invalid Input`);
    cont();
  }
 

  function cont(){
    console.clear();
    let num = parseInt(prompt(`Type 1 to repeat the process, type 2 to exit: `))

    if(num === 1){
      console.clear();
      _dateOfBirth();
    }else if(num === 2){
      console.clear();
      console.log(`Thank you for visiting`);
    }
      else{
      console.log("Please type a valid number")
     cont();
    }
  }
}
_dateOfBirth();

