//chapter 21-25
//String Methods
//question 1
var firstName = prompt("First Name:","Enter your first name")
var lastName = prompt("Last Name:","Enter your last name")
var fullName = firstName + " " + lastName
alert("Hello" + " " + fullName + "!")
//question 2
var mobModel = prompt("Favourite Mobile phone Model:","What's your favourite mobile phone model?")
document.write("My favourite phone is: " + mobModel + "<br>")
document.write("Length of string: " + mobModel.length)
//question 3
var string = "Pakistani"
var indexStr = string.indexOf('n');
document.write("String: " + string + "<br>")
document.write("Index of 'n': " + indexStr)
//question 4
var string = "Hello World"
var indexStr = string.lastIndexOf('l');
document.write("String: " + string + "<br>")
document.write("Last index of 'l': " + indexStr)
//question 5
var string = "Pakistani"
var indexStr = string.charAt(3);
document.write("String: " + string + "<br>")
document.write("Character at index 3: " + indexStr)
//question 6
var firstName = prompt("First Name:","Enter your first name")
var lastName = prompt("Last Name:","Enter your last name")
var fullName = firstName.concat(' '+lastName)
alert("Hello" + " " + fullName + "!")
//question 7
var city = "Hyderabad"
var city1 = city.replace("Hyder","Islam")
document.write("City: " + city + "<br>")
document.write("After replacement: " + city1)
//question 8
var message = "Ali and Sami are best friends.They play cricket and football together."
var message1 = message.replace(/and/g,"&")
document.write("Before replacement: " + message + "<br>")
document.write("After replacement: " + message1)
//question 9
var string = "472"
string1 = parseInt(string)
document.write("Value: " + string + "<br>")
document.write("Type: " + typeof(string) + "<br>")
document.write("Value: " + string1 + "<br>")
document.write("Type: " + typeof(string1) + "<br>")
//question 10
var askUser = prompt("User Input:","Enter your input")
var askUser1 = askUser.toUpperCase()
document.write("User input: " + askUser + "<br>")
document.write("Upper case: " + askUser1)
//question 11
var askUser = prompt("User Input:","Enter your input")
var firstChar = askUser.slice(0,1);
firstChar = firstChar.toUpperCase()
var otherChar = askUser.slice(1)
otherChar = otherChar.toLowerCase()
document.write("User input: " + askUser + "<br>")
document.write("Title case: " + firstChar + otherChar)
//question 12
var num = 35.36;
num1 = num.toString()
var result = num1.replace(".","")
document.write("Number: " + num + "<br>")
document.write("Result: " + result + "<br>")
//question 13
var userName = prompt("User Name:","Enter your username")
userName = userName.toLocaleLowerCase()
var check = false

for (i=0;i<userName.length;i++){
    if(userName.slice(i,i+1).charCodeAt()== 33 ||userName.slice(i,i+1).charCodeAt()== 44 ||userName.slice(i,i+1).charCodeAt()== 46 || userName.slice(i,i+1).charCodeAt()== 64 ){
        check = true;
    }else{
        check = false
    }
}
if (check == true){
    alert("Please enter a valid username")
}else{
    userName
}
//question 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var askUser = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
askUser = askUser.toLocaleLowerCase()
var isFound = false
for (i = 0; i < A.length; i++) {
    if (askUser === A[i]) {
        alert(askUser + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + askUser + " is not available in our bakery")
}
//question 15
var askUser = prompt("Password:","Enter your password");
var flag = 0
var count = 0
var check = +askUser.slice(0,1)
if (check.toString()!= "NaN"){
    flag++
}else{
    for (i = 0 ;i < askUser.length;i++){
        var checker = +askUser.slice(i,i+1)
        if (checker.toString() == "NaN"){
            count++
        }
    }
}
if (flag == 1 ||count == askUser.length){
    alert("Please enter a valid password")
}
//question 16
var university = "University of Karachi"
var uniSplit = university.split("")

for (i=0;i<university.length; i++) {
    document.write(uniSplit[i]+"<br>");
}
//question 17
var askUser = prompt("User Input:","Enter your input")
var lastChar = askUser.charAt(askUser.length - 1)
document.write("User input: " + askUser + "<br>")
document.write("Last character of input: " + lastChar)
//question 18
var string = "The quick brown fox jumps over the lazy dog"
var count = 0
var word = "the"
var wordCheck = string.toLocaleLowerCase()
for (i = 0;i < wordCheck.length;i++){
    checker = wordCheck.slice(i,(word.length) + i)

    if (word == checker){
        count++
    }
}
console.log("Text: " + string)
console.log("There are " + count + " occurrence(s) of word 'the'")



//Chapter 26-30
//Math Methods
//question 1
var num = +prompt("Positive Integer:","Enter a positive integer")
var numRound = Math.round(num)
var numFloor = Math.floor(num)
var numCeil= Math.ceil(num)
if (num > 0){
document.write("Number: " + num + "<br>")
document.write("Round off Value: " + numRound + "<br>")
document.write("Floor Value: " + numFloor + "<br>")
document.write("Ceil Value: " + numCeil + "<br>")
}
else{
    alert("Please enter valid input!")
}
//question 2
var num = +prompt("Negative Floating Point Number:","Enter a negative floating point number")
var numRound = Math.round(num)
var numFloor = Math.floor(num)
var numCeil= Math.ceil(num)

document.write("Number: " + num + "<br>")
document.write("Round off Value: " + numRound + "<br>")
document.write("Floor Value: " + numFloor + "<br>")
document.write("Ceil Value: " + numCeil + "<br>")
//question 3
var num = +prompt("Number:","Enter a number")
var absoluteNum = Math.abs(num)
document.write("The absolute value of " + num + " is " + absoluteNum)
//question 4
var dice = Math.random() * 6 + 1
var diceFloor = Math.floor(dice)
document.write("Random dice value: " + diceFloor)
//question 5
var coinToss =  Math.random() * 2 + 1
var tossFloor = Math.floor(coinToss)
document.write(tossFloor + "<br>")
if (tossFloor === 2){
 document.write("Random coin value: Heads")
} 
else if (tossFloor === 1) {
    document.write("Random coin value: Tails")
}
//question 6
var num = Math.random() * 100 + 1
var numFloor = Math.floor(num)
document.write("Random number between 1 and 100: " + numFloor)
//question 7
var askUser = prompt("Weight in kilograms:","Enter your weight in kilograms")
askUser = askUser.toLowerCase()
var weight = askUser.split("k")
document.write("The weight of user is" + " " + weight[0] + " " + "kilograms")
//question 8
var num = Math.random() * 10 + 1
var numFloor = Math.floor(num)
var askUser = +prompt("Guess the number:","Enter a number between 1 and 10")
if (askUser === numFloor){
    alert("Congratulations!You guessed correctly")
}
else{
    alert("Try again")
}
//Chapter 31-34
//Date Methods
//question 1
var today = new Date();
document.write(today)
//question 2
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var today = new Date();
var monthNow = today.getMonth();
var currentMonth = monthNames[monthNow];
alert("Current Month: " + currentMonth)
//question 3
var dayNames = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
var today = new Date();
var dayNow = today.getDay();
var currentDay = dayNames[dayNow];
alert("Today is " + currentDay)
//question 4
var dayNames = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
var today = new Date();
var dayNow = today.getDay();
if (dayNow === 0 || dayNow === 6){
    alert("It's Fun day")
}
//question  5
var wholeDate = new Date();
var dateonly = wholeDate.getDate();
if (dateonly < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}
//question 6
var today = new Date();
var todayMilli = today.getTime()
var oldDate = new Date("Jan 1,1970")
var oldMilli = oldDate.getTime()
var diffMilli = todayMilli - oldMilli
var minsElapse = Math.floor(diffMilli/(1000*60))
document.write("Current Date: " + today + "<br>")
document.write("Elapsed milliseconds since January 1,1970: " + diffMilli + "<br>" )
document.write("Elapsed minutes since January 1,1970: " + minsElapse)
//question 7
var today = new Date();
var currentHour = today.getHours();
if (currentHour <= 12){
    alert("It's AM")
}
else{
    alert("It's PM")
}
//question 8
var laterDate = new Date("Dec 31,2020");
document.write("Later Date: " + laterDate)
//question 9
var ramzanDate = new Date("June 18,2015");
var today = new Date();
var todayMilli = today.getTime()
var ramzanMilli = ramzanDate.getTime()
var diffMilli = todayMilli - ramzanMilli
var daysElapse = Math.floor(diffMilli/(1000*60*60*24))
alert(daysElapse +" days have passed since 1st Ramadan, 2015")
//question 10
var refDate = new Date("Dec 05,2015");
var refMilli = refDate.getTime()
var startDate = new Date("Jan 01,2015");
var startMilli = startDate.getTime()
var diffMilli = refMilli - startMilli
var secsElapse = Math.floor(diffMilli/(1000*60))
document.write("On reference date " + refDate + "," + secsElapse + " seconds had passed since beginning of 2015")
//question 11
var today = new Date();
var oneHourBehind = new Date();
var changeHour = oneHourBehind.setHours(oneHourBehind.getHours() - 1);
var oldHour = new Date(changeHour)
document.write("Current Date: " + today + "<br>")
document.write("1 hour ago, it was " + oldHour)
//question 12
var today = new Date();
var oneCenturyBehind = new Date();
var changeYear = oneCenturyBehind.setYear(oneCenturyBehind.getFullYear() - 100);
var oldYear = new Date(changeYear)
alert("Current Date: " + today + "\n100 years back, it was " + oldYear)
//question 13
var today = new Date();
var askUser = +prompt("Age:","Enter your age in number")
var dobAge = new Date(askUser);
var currentYear = today.getFullYear();
var dobYear = dobAge.setYear(currentYear - askUser)
var dobDate = new Date(dobYear)
var onlyDobYear = dobDate.getUTCFullYear();
document.write("Your age is " + askUser + "<br>")
document.write("Your birthyear is " + onlyDobYear)
//question 14
document.write("<h1>K-Electric Bill</h1>" + "<br>")
//a
var askUser = prompt("Customer Name:","Enter your name")
document.write("Customer Name: " + askUser + " Customer" + "<br>")
//b
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var today = new Date();
var monthNow = today.getMonth();
var currentMonth = monthNames[monthNow];
document.write("Month: " + currentMonth + "<br>")
//c
var unitInNumbers = prompt("Number of units:","Enter your number of units")
document.write("Number of Units: " + unitInNumbers + "<br>")
//d
var chargePerUnit = prompt("Charge per Unit:","Enter your charges per unit")
document.write("Charges per Unit: " + chargePerUnit + "<br>" + "<br>")
//e
var netAmount= unitInNumbers * chargePerUnit
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>")
//f
var dueDateCharge = 350
document.write("Late Payment Surcharge: " + dueDateCharge + "<br>")
//g
var grossAmount = netAmount + dueDateCharge
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>")
//Chapter 35-38
//Function
//question 1
function todayDate() {
    var dateToday = new Date();
    document.write(dateToday)
}
todayDate()
//question 2
function username(firstname,lastname) {
        alert("Hello " + firstname + " " + lastname + "!")
}
username("Kashish","Fatima")
//question 3
function addNum(num1,num2){
         num = num1 + num2
         document.write(num)
}
addNum(3,8)
//question 4
function calc(num1,oper,num2){
    if(oper === "+"){
        return num1 + num2
    }
    else if (oper === "-"){
        return num1 - num2
    }
    else if (oper === "*"){
        return num1 * num2
    }
    else if (oper === "/"){
        return num1 / num2
    }
    else{
        return "Incorrect Operator"
    }
}
var result1 = calc(3,"+",7)
var result2 = calc(5,"-",9)
var result3 = calc(8,"*",6)
var result4 = calc(2,"/",2)
document.write(result1 + "<br>")
document.write(result2 + "<br>")
document.write(result3 + "<br>")
document.write(result4 + "<br>")
//question 5
function numSquare(num){
    return num * num
}
numSquare(2)
//question 6
function numFactorial(num){
  if(num === 0){
      return 1
  }
  else{
      return (num * numFactorial(num-1))
  }
}
numFactorial(4)
//question 7
function numCounting(){
    var startNum = +prompt("Enter counting start number")
    var endNum = +prompt("Enter counting end number")
    for (var i = startNum;i<=endNum;i++){
        document.write(i + "<br>")
     }
}
numCounting()
//question 8
function calculateHypotnuse(base,perpendicular){
    var base = +prompt("Enter base of right angle triangle")
    var perpendicular = +prompt("Enter perpendicular of right angle triangle")
    function calculateSquare(num){
        return num * num
    }
    var hypotnuse = calculateSquare(base) + calculateSquare(perpendicular)
    return Math.sqrt(hypotnuse)
}
calculateHypotnuse()
//question 9
//arguments as value
function rectangleArea(width,height){
    return width * height
}
rectangleArea(4,5)
//arguments as variables
var width = 4;
var height = 5;
function rectangleArea(){
    return width * height
}
rectangleArea(width,height)
//question 10
function checkPalindrome(string){
    var reg = /[\W _]/g;
    var lowRegString = string.toLowerCase().replace(reg,'');
    var reverseString = lowRegString.split('').reverse().join('')
    return reverseString === lowRegString;
}
checkPalindrome("madam")
//question 11
var exampleStr = "the quick brown fox"
function upperCase(string){
    string = string.split(" ")
    var array = []
    for (var i = 0;i<string.length;i++){
        array.push(string[i].charAt(0).toUpperCase()+string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Example String was: " + exampleStr)
console.log("Output now is: " + upperCase(exampleStr))
//question 12
function long_word(string){
    var array1 = string.match(/\w[a-z]{0,}/gi)
    var result = array1[0];

    for (var i = 1;i < array1.length; i++){
        if(result.length < array1[i].length){
            result = array1[i];
        }
    }
    return result;
}
console.log("Example String: 'Web Development Tutorial'")
console.log("Output is: "+  long_word("Web Development Tutorial"));
//question 13
function letterCount(string,letter){
    var count = 0;
    for(var i = 0; i < string.length ;i++ ){
        if (string.charAt(i) == letter){
            count += 1;
        }
    }
    return count;
}
console.log(letterCount('JSResourceS.com','o'))
//question 14
function calcCircumference(radius){
    var calc = 2 * Math.PI * radius
    alert("The circumference is: " + calc)
}
calcCircumference(2)
function calcArea(radius){
    var calc = Math.PI * (radius * radius)
    alert("The area is: "+ calc)
}
calcArea(2)