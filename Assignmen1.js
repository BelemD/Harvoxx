/*var a = 7;  var Sum = addition.result;
var b = 6;

function addition(){
  var result = a + b;
  return result;
}
Arrow function

function addition(a, b) => (a + b);
console.log(3, 5);

function subtract(){
  var result = a - b;
  return result;
}
console.log(subtract());


var c = addition();

function multiply(){
   return c * 5;

}

console.log(multiply)*/




/*function newAges(){
  return ("Emma will be " + (Emma + 5) + "years old in 5years, while his dad will be " + (dad + 5) + "years old in 5 years too" );
}
console.log(newAges());


function dadBirthAge(){
  return (
    "Emma's dad was " + (dad - Emma) + "years old when Emma was born"
  );
}

console.log(dadBirthAge()); */

var Emma = 13;  var dad = 35;

function EmmaDad(newEmma, newdad){
  return ("Emma will be " + (newEmma + 5) + "years old in 5years, while his dad will be " + (newdad + 5) + "years old in 5 years too," +
  "\nEmma's dad was " + (newdad - newEmma) + "years old when Emma was born."
  );
}

console.log(EmmaDad(Emma,dad));

const stud = [5];


console.log(stud.length);


