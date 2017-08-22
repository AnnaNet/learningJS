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
