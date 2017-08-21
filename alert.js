alert ('Я – JavaScript!');
/*var admin, name;
name = "Василий";
admin = name;
alert (admin);
var ourPlanetName = "Земля", clientName = "Петя";*/
do {
  var Name = prompt("Enter your name, please:", '');
  var ConfName = confirm("Is your name "+Name+"?");
  if (ConfName == true) alert ("Your name is "+Name+".")
    else alert ("We are not know your name.");
  alert (ConfName);
} while (ConfName != true);
