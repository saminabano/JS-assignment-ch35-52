//chapter 35-38
//Q1 
function tellTime() {
    var now=new Date();
    document.write(now);
    
}
tellTime();
//Q2

function greetUser() {
    var firstName=prompt("write your first name")
    var lastName=prompt("write your last name")
   
    var fullName =( firstName + ' ' + lastName);
    console.log("Hello, " + fullName );
  }
  greetUser();

  //Q3
  function addNumber(){
    var num1=parseFloat(prompt("write any number here"));
    var num2=parseFloat(prompt("write another number here"));
    var num3=(num1 + num2);
    document.write("<br>","sum of two numbers is ",num3);
  }
 addNumber();
 //Q4 Write a function that takes three arguments num1, num2
//& operator & compute the desired operation. Return and
//show the desired result in your browser.
function calculation(num1, num2){
  var answer=(num1 +num2);
  return answer;
}
var result=calculation(7,8);
console.log(result)

//Q5
function squNum(num1){
  var Squ=(num1 * num1)
  return Squ;
}
var input = prompt("Enter the number for which you want a square");
var num=squNum(input)
console.log(num)
//Q 6
function factorial(num){

if (num === 0)
{
  return 1;
}
return num * factorial(num-1);
       
}
console.log(factorial(6));
//Q7
var start = prompt("write a starting number here ");
var end = prompt("write end number");
function counting(){
  for( var i=start; i <=end ; i++){
      console.log(i);
  }
}
//   Q9Write a function that calculates the area of a rectang....

var width=60;
var height=40;
function areaOfRect(height,width){
  var x=height*width;
  return x;
}
var area= areaOfRect(40,width);
document.write("Area of a rectangle is " +area)


//Q 10


//Q 11

// let string = 'the quick brown fox';
// let firstChar  = string[0].toUpperCase();
// console.log(firstChar);
// for(let i = 0;i<string.length;i++){
//     if(string.slice(i,i+1)===" "){
//          firstChar = string[i+1].toUpperCase();
//         console.log(firstChar);
//     }
// }


//Q 12
// let a="karachi is a big city"
// function longWord(str){
//   var x=str.split(" ");
//   var word="0";
//   for (var i=0;i < word.length; i++){
//     var word = word[i];
//   }
// return longWord;
  
// }
// longWord();

// Q  13
// var str=prompt("enter any string");
// var letter=prompt("enter a letter you want to serch");
// let count= 0;
// function Count(str,letter){
//   for(var i=o;i<str.length;i++){
//     if(str[i]===letter){
//       count++;
// }
//   }
//   return count;
// }


//Q 14
var radius =prompt("enter radius of a circle");
function calcCircumference(radius){
  return(2*3.142*radius);
}
function calcArea(ramadan){
  return(3.142*(radius*2))
}
document.write("<br>","circumference of a circle is "+calcCircumference(radius))
document.write("<br>","area is "+calcArea(radius))
  
  //------------------xxx-------------------xxx--------------
  //------------------xxx-------------------xxx--------------
                 //chapter 38-40
  //Q1
  function squares(a , b){
    return Math.pow(a,b);
  }
  //Q2 
  var year=prompt("write year");
    function LeapYear(year) {
      if (year % 4 === 0 && year % 100 !== 0) {
        return true;
      }
        else {
        return false;
      }
    }
    
  if (LeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
    //Q3
    var sidea= 10;
    var sideb= 8;
    var sidec= 7;
    function calculateTriangleArea(a, b, c) {
      var s = (a + b + c) / 2;
      var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      return area;
    }
    var triangleare=calculateTriangleArea(sidea,sideb,sidec);
    console.log(triangleare);
   //Q 4Write a function that receives marks received by a student in 3
//subjects and returns the average and percentage of these
//marks. there should be 3 functions one is th............
// var data1=prompt("write your first subject number");
// var data2=prompt("write your second subject number");
// var data3=prompt("write your thired subject number");

// Q5You have learned the function indexOf. Code your own custom
//function that will perform the same functionality..........
var str=("karachi is a big city");
var char="h";
function indexOf(str,char){
  for (var i=0;i<str.length;i++){
    if(str[i]===char){
      return i;
    }
  }
  
      return -1;
    }
  
  
  var singChar=indexOf(str,char);
  console.log(singChar);
//Q 6Write a function to delete all vowels from a sentence. Assume
//that the sentence is not more than 25 characters long.
var str = "The quick brown fox jumps";
function omitvowels(a) {
  a = a.toLowerCase();
  for(var i = 0; i < a.length; i++){
    if(a[i] == "a" || a[i] == "e" || a[i] =="i" || a[i]=="o" || a[i]=="u"){
      a = a.slice(0,i) + a.slice(i+1);
      i--;
  }
}
console.log(a);
}
omitvowels(str);

//q7

var str = "Please read this application and give me gratuity";

function count(a) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  a = a.toLowerCase();
  
  for (var i = 0; i < a.length - 1; i++) {
    var currentChar = a[i];
    var nextChar = a[i + 1];
    
    switch (true) {
      case vowels.includes(currentChar) && vowels.includes(nextChar):
        count++;
        break;
    }
  }
  
  console.log(count);
}

count(str);

//q8
var km = prompt("Write distance between 2 cities in km");
document.write("Distance in meters is ", meters(km), "m </br>");
document.write("Distance in centimeters is ", cm(km), "cm </br>");
document.write("Distance in feet is ", feet(km), "ft </br>");
document.write("Distance in inches is ", inches(km),"in </br>");

function meters(a){
  var result = a*1000;
  return result;
}

function cm(a){
  var result = a*100000;
  return result;
}

function feet(a){
  var result = a*3281;
  return result;
}

function inches(a){
  var result = a*39370;
  return result;
}

//q9
function calculateOvertimePay(hoursWorked) {
  var regularHours = 40;
  var overtimeRate = 12.00;
  var overtimeHours = Math.max(hoursWorked - regularHours, 0);
  var overtimePay = overtimeHours * overtimeRate;

  return overtimePay;
}

var hoursWorked = 45;
var overtimePay = calculateOvertimePay(hoursWorked);
console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));

//q10
function calculateCurrencyNotes(amount) {
  var denominations = [100, 50, 10];
  var notesCount = [0, 0, 0]; 

  for (var i = 0; i < denominations.length; i++) {
    if (amount >= denominations[i]) {
      notesCount[i] = Math.floor(amount / denominations[i]);
      amount = amount% denominations[i];
    }
  }

  return notesCount;
}

var withdrawalAmount = 370; 
var notesCount = calculateCurrencyNotes(withdrawalAmount);
console.log("Currency Notes:");
console.log("100s: " + notesCount[0]);
console.log("50s: " + notesCount[1]);
console.log("10s: " + notesCount[2]);