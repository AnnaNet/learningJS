/*alert ('Я – JavaScript!');
var admin, name;
name = "Василий";
admin = name;
alert (admin);
var ourPlanetName = "Земля", clientName = "Петя";

do {
  var Name = prompt("Enter your name, please:", '');
  var ConfName = confirm("Is your name "+Name+"?");
  if (ConfName == true) alert ("Your name is "+Name+".")
    else alert ("We are not know your name.");
  //alert (ConfName);
} while (ConfName != true);

var number = prompt("Enter any integer number ", '');
if (number > 0){
  alert ("1");
}  else if (number < 0){
     alert ("-1");
}  else {
     alert ("0");}*/

/*// This is verifing name and password
var userName = prompt("Enter your name ", '');

if (userName == "Admin"){
  var password = prompt("Enter PASSWORD!", '');

  if (password == "BlackDemon"){
    alert("Wellcome");

  } else if (password == null){
      alert("Вход отменен");

  } else {
      alert("Password is wrong!");}

} else if (userName == null){
    alert("Вход отменен");

} else {
    alert("Я Вас не знаю!");
}
*/

/*"if"  to  "?"
var a = prompt ("enter a ", ''), b = prompt ("enter b ", '');
(+a + +b < 4 ) ?
  alert("Мало") : alert("Mного");
*/
/*
var message;
var login = prompt("enter login ", '');
(login == 'Vasya') ? message = 'Hello' :
(login == 'Boss') ? message = 'OOO HelLOOO' :
(login == '') ? message = 'Not login':
message = 'Nothing';
alert(message);*/

//exersize for "if"
//var age = prompt("Enter your age ", '');
/*
if ((age != 14 && age != 90) && (age < 14 || age > 90)) {
  alert("Your age  " + age + "  is right!");
} else alert("Your age  " + age + "  is wrong!");
*//*  if (!(age >= 14 && age <= 90))
  if (age < 14 || age > 90) {
  alert("Your age  " + age + "  is right!");
} else alert("Your age  " + age + "  is wrong!");
*/

//for, while
//for (i = 2; i <= 10; i = i + 2) alert(i);
/*var i = 2;
var n_1 =2;
while (i <= 10) {
  if ((i % n_1) || (i == 2))
    alert("number " + i + "!");
  ++i;
}*/

//switch to "if"
/*var browser = prompt ("Enter your browser ", '');
if (browser == "IE") {
  alert("0, yes IE");
} else if (browser == "Ch" || browser == "FF" || browser == "S" || browser == "O") {
    alert("Yes, we are.");
} else alert ("No");*/

/*var a = +prompt("a?", '');
switch (a){
  case 0 :
    alert( 0 );
    break;
  case 1 :
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( "2,3" );
}

var Age = prompt("Your age?", '');

function checkAge(Age) {
  (Age > 18) ? return true;
  return confirm("Parents ...");
}

checkAge(Age);

var x = prompt("Enter x", ''), n = prompt("Enter n", '');

function pow(x, n) {
  var x0 = +x;
  if (n > 0){
    for (var i = 1; i < n; ++i) {
      x = x * x0;
    }
    return x;}*/

//var n = +prompt("enter n", '');
//var j = n;
//for (var i = 1; i < j; i++) {
//  n = n +(n - i);
//}
/*function sum(n) {
  if (n != 1) {
    return n + sum(n-1);
  }
  else return n;
}
alert (sum(n));*/
/*
function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  var arr = [n];
  arr [0] = 1;
  arr [1] = 1;
  for (var i = 2; i < n; i++){
    arr [i] = arr [i-1] + arr [i-2];
  }
  return arr[n-1];
}
  alert (fib(n));*/

/*
var user = {
  name : "Вася",
  surname : "Петров"
}

alert (user.name + " " + user.surname);

user.name = "Сергей";

alert (user.name + " " + user.surname);

delete user.name;

alert (user.name + " " + user.surname);
/*
function isEm(names) {
  var count = 0;
  for (var i in data){
    count++;}
  if (count > 0) {
    alert ("True");
  } else alert ("False");
}

isEm (data);
*/

/*var salers = {
  "volf" : 100,
  "rabbit" : 200,
  "I" :300
};

var sum = 0;

for (var i in salers){
  sum = sum + salers[i];
};

alert (sum);*/

/*var styles = ["Джаз","Блюз"];
alert (styles);

styles.push("Рок-н-Ролл");
alert (styles);

styles[styles.length - 2] = "Классика";
alert (styles);

alert (styles.shift());

styles.unshift("Рэп","Регги");
alert (styles);*/


/*var fruts = ["Apple", "Orange", "Pear", "Lemon"];

var rand = Math.floor(Math.random() * fruts.length);

alert (fruts[rand]);*/


var numbers = [];
var i = 0;
var sum = 0;

do {numbers[i] = prompt("Ведите число:", '');
  sum = sum + numbers[i];
  ++i;
} while (numbers[i-1] !== undefined);

alert (sum);
