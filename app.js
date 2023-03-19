// String Methods 21 - 25

// Question #1 

// var firstName = prompt("Write Your First Name");
// var lastName = prompt("Write Your Last Name");
// var fullName = firstName + " " + lastName;
// document.write("Welcome " + fullName)

// Question #2

// var favPhone = prompt("Write Your Favorite Mobile Phone Model.");
// var phoneLength = favPhone.length;
// document.write("My Favorite Phone is: " + favPhone + "<br/>");
// document.write("Length of string: " + phoneLength);

// Question #3

// var index = "Pakistani";
// var findIndex = index.indexOf("n");
// document.write("String: " + index + "<br/>");
// document.write("Index of 'n': " + findIndex)

// Question #4

// var index = "Hello World";
// var findIndex = index.lastIndexOf("l");
// document.write("String: " + index + "<br/>");
// document.write("Index of last 'l': " + findIndex)

// Question #5

// var index = "Pakistani";
// var findChar = index.charAt(3);
// document.write("String: " + index + "<br/>");
// document.write("Character at index 3: " + findChar)

// Question #6


// var firstName = prompt("Write Your First Name");
// var lastName = prompt("Write Your Last Name");
// var fullName = firstName + " " + lastName;
// document.write("Welcome " + fullName)

// Question #7

// var a = "Hyderabad";
// document.write("City: " + a + "<br/>");
// a = a.replace("Hyder", "Islam");
// document.write("After replacement: " + a)

// Question #8

// var message = "Ali and Sami are best friends. They play cricket and football together." ;
// message = message.replace(/and/g , "&") 
// document.write(message)

// Question #9

// var a = "472";
// var b = parseInt(a)
// document.write("Value: " + a + "<br/>");
// document.write("Type: " + typeof a + "<br/>")
// document.write("Value: " + b + "<br/>");
// document.write("Type: " + typeof b)

// Question #10

// var a = prompt("Write Anything");
// document.write("User input: " + a + "<br/>");
// document.write("Upper case: " + a.toUpperCase());

// Question 11

// var a = prompt("Type Anything");
// var b = a[0].toUpperCase() + a.slice(1)
// document.write("User input: " + a + "<br/>");
// document.write("Title case: " + b + "<br/>");

// Question 12

// var num = 33.36 ;
// var numString = num.toString().replace("." , "");
// document.write("Number: " + num + "<br/>");
// document.write("Result: " + numString);

// Question #13

// var username = prompt("Enter your username:");
// var isValid = true;
// var specialSymbols = ['@', '.', ',', '!'];
// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     isValid = false;
//     break;
//   }
// }
// if (!isValid) {
//   alert("Enter a valid username without special symbols [@ . , !]");
// }

// Question #14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search:");

// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   document.write(`"${A[i]}" is found in the list.`);
// } else {
//   document.write(`"${userInput}" is not found in the list.`);
// }

// Question #15

// var password = prompt("Enter Password");

// if(password.length < 6){
//     password = prompt("Password should be at least 6 charaters long. Enter a valid password.")
// }else if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(password)){
//     password = prompt("Password Should contain Only alphabets and numbers , Please enter a valid Password.")}
// else{
//     alert("Valid Password!!")
// }

// Question #16

// var uni = "University of Karachi";
// var arr = uni.split("");

// for(var i = 0 ; i < arr.length; i++){
//     document.write(arr[i] + "<br/>")
// }

// Question #17

// var a = "Pakistan";
// document.write("User input: " + a + "<br/>");
// document.write("Last character of input: " + a.charAt(a.length -1));

// Question #18

// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var words = str.split(" ");

// for(var i = 0 ; i < words.length; i++){
//     if(words[i].toLowerCase() === "the"){
//         count++
//     }
// }
// document.write("Text: " + str + "<br/>");
// document.write("There are " + count + " occurrence(s) of word 'the'")

// Math Methods 26-30

// Question #1

// var num = prompt("Enter a positive integar")
// var number = parseInt(num)
// var roundOff = Math.round(num)
// var floor = Math.floor(num)
// var celiValue = Math.ceil(num)
// document.write("number: " + num + "<br/>");
// document.write("round off value: " + roundOff + "<br/>");
// document.write("floor value: " + floor + "<br/>");
// document.write("celi value: " + celiValue + "<br/>");

// Question #2

// var num = prompt("Enter a negative floating point")
// var number = parseInt(num)
// var roundOff = Math.round(num)
// var floor = Math.floor(num)
// var celiValue = Math.ceil(num)
// document.write("number: " + num + "<br/>");
// document.write("round off value: " + roundOff + "<br/>");
// document.write("floor value: " + floor + "<br/>");
// document.write("celi value: " + celiValue + "<br/>");


// Question #3

// var num = +prompt("Write a number");
// var absoluteValue = Math.abs(num);
// document.write("the absolute value of " + num + " is " + absoluteValue)

// Question #4

// var num = Math.random() *5 +1 ;
// var floorNum = Math.floor(num)
// document.write("Random dice value: " + floorNum)

// Question #5

// var coin = Math.random() *1 +1 ;
// var roundNum = Math.round(coin)
// var results;

// if(roundNum === 1){
//     results = "Heads"
// }else{
//     results = "Tails"
// }
// document.write(roundNum + "<br/>")
// document.write("Random dice value: " + results)

// Question #6

// var randomNum = Math.random() *100;
// var roundNum = Math.round(randomNum);
// document.write("random number between 1 and 100: " + roundNum)

// Question #7

// var weight = prompt("Enter your weight in kilograms");
// weight = parseInt(weight.replace(/[^\d.-]/g , ""));
// document.write("Your weight is: " + weight + " kilograms")


// Question #8

// var secretNumber = +prompt("Write a Number");
// var randomNum = Math.random() *10 +1;
// var roundOff = Math.round(randomNum)
// console.log(roundOff)
// if(secretNumber === roundOff){
//     document.write("Congratulation!! You Got it Right!!")
// }else(
//     document.write("Better Luck Next Time")
// )

// DATE METHODS 31 - 34

// Question #1

// var time = new Date();
// document.write(time)

// Question #2


// var months = ["January", "February", "March", "April", "May", "June", 
//               "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// var month = months[d.getMonth()];
// document.write("Current month: " + month)

// Question #3

// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var d = new Date();
// var day = days[d.getDay()];
// document.write("Today is " + day)

// Question #4


// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var d = new Date();
// var day = days[d.getDay()];
// if(day === "Sat" || "Sun"){
//     document.write("It's Fun Day")
// }else{
//     document.write("Work Work Work")
// }

// Question #5

// var d = new Date();
// var days = d.getDate();
// if(days <=15){
//     document.write("First Fifteen Days of the month");
// }else{
//     document.write("Last Days of the Month")
// }

// Question #6

// var d = new Date();
// var miliSec = d.getTime();
// var mins = Math.round(d.getTime() /(1000 * 60)) ;
// document.write("Current Date: " + d + "<br/>");
// document.write("Elapsed milliseconds since January 1, 1970: " + miliSec + "<br/>");
// document.write("Elapsed minutes since January 1, 1970: " + mins + "<br/>");

// Question #7

// var now = new Date();
// var hour = now.getHours();

// if(hour < 12){
//     alert("Its AM")
// }else{
//     alert("its PM")
// }

// Question #8

// var laterDate = new Date(2020,11,31);
// document.write("Later date: " + laterDate)


// Question #9

// var ramadanStart = new Date();
// var oneDay = 24 * 60 * 60 * 1000;
// var daysPassed = Math.round((ramadanStart.getTime()- new Date(2015,5,18).getTime()) / oneDay)
// document.write(daysPassed + " days have passed since 1st Ramadan, 2015")

// Question #10

// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015,11,05);
// var elapsedSeconds = Math.round((referenceDate.getTime()- beginningOf2015.getTime())/ 1000);
// document.write("On reference date " + beginningOf2015 + " , " + elapsedSeconds + " seconds had passed since beginning of 2015")

// Question #11

// var oldtime = new Date();
// var currentDate = new Date();
// var currentHours = oldtime.getHours();
// currentDate.setHours(currentHours +1);
// document.write("current date: " + currentDate + "<br/>");
// document.write("1 hour ago, it was " + oldtime )

// Question #12

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear()- 100);
// alert("100 years ago it was: " + currentDate);

// Question #13

// var age = +prompt("Write Your Age");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your age is " + age + "<br/>");
// document.write("Your birth year is " + birthYear)

// Quesion #14

