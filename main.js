//1
let x= 6
let y = 9
let result= x*y
console.log("The area of the rectangle is "+ result);
//2 
let temp = 28
let res = temp * 5/9 + 32
console.log(temp + "°F is" + res+"°C" );
//3
let hours = 5;
let seconds = hours * 3600; 
console.log(hours + " hours = " + seconds + " Seconds");

//4
let age = 24
let me= `my age is ${age}`
console.log(me)

//5
var bill =10.25 + 3.99 + 7.15;
var tip =bill * 0.15;
var total = bill + tip;
console.log(total);
//6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);

//7 
var firstName = "Fatimah";
var interest = "Stars";
var hobby = "watch the stars in sky night";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

//////////////////////////////////////////////////////////////////

//2
var musicians = 0;
if(musicians <=  0){
    console.log("not a group");
 }else if(musicians == 1){
    console.log("solo");
 }else if(musicians == 3){
    console.log("trio");
 }
 else if(musicians == 4){
    console.log("quartet");
 }
 else if(musicians > 4){
    console.log("this is a large group");
 }

 var musicians = 1;
 if(musicians <=  0){
    console.log("not a group");
 }else if(musicians == 1){
    console.log("solo");
 }else if(musicians == 3){
    console.log("trio");
 }
 else if(musicians == 4){
    console.log("quartet");
 }
 else if(musicians > 4){
    console.log("this is a large group");
 }

 //3


 //4
 var balance = -325;
 var checkBalance = true;
 var isActive = true;

 if(balance ==  isActive){
    console.log("true");
 }else if(balance> -325){
    console.log("empty");
 }
 else if(balance == -325){
    console.log("not empty");
 }

    
//5
let flavor = "vanilla";
let vessel = "cone";
let toppings = "sprinkles";
if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(`You have ordered a flavor ice cream in a vessel with toppings`);
}