 var myName = prompt("Cher visiteur, quel est votre prénom?");
document.getElementById("promptname").textContent= myName;

// Récupération du champ à enregistrer
var champ = document.getElementById("promptname");

// Vérification de l'existence d'une donnée enregistrée auparavant
// (ce ne sera le cas que si la page a été rafraîchie)
if (sessionStorage.getItem("autosave")) {
  // Restauration du contenu du champ
  champ.value = sessionStorage.getItem("autosave");
}

// Écoute des changements de valeur du champ
champ.addEventListener("change", function() {
  // Enregistrement de la saisie utilisateur dans le stockage de session
  sessionStorage.setItem("autosave", champ.value);
});


// display date
/*
(function() {

  var d = new Date();
  var userDay = d.getUTCDate();
  var userMonth =  d.getMonth();
  var userYear = d.getFullYear();
  var userHour = d.getHours();
  var userMinute = d.getMinutes();

  var weekday = new Array(7);
  weekday[0] =  "dimanche";
  weekday[1] = "lundi";
  weekday[2] = "mardi";
  weekday[3] = "mercredi";
  weekday[4] = "jeudi";
  weekday[5] = "vendredi";
  weekday[6] = "samedi";

  var openClosed = "";

  if (weekday !== "dimanche" && !== "lundi") {
    openClosed = "ouverts";
  } else {
    openClosed = "fermés";
  };

  var currentDay = weekday[d.getDay()];

  var monthName = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  var currentMonth = monthName[d.getMonth()];

  // proper numbers fix
  userMonth = (userMonth + 1);

  console.log(d);
  console.log(userDay);
  console.log(userMonth);
  console.log(userYear);
  console.log(monthName);
  // display  0 in front of months and days > 10
    if (userMonth < 10) {
      userMonth = ('0' + userMonth);
    };
    if (userDay < 10) {
      userDay = ('0' + userDay);
    };

  document.getElementById("myDate").textContent=('Nous sommes le ' + currentDay + ' ' + userDay + ' ' + currentMonth + ' ' + userYear + ' - ' + userHour + ':' + userMinute);
  document.getElementById("openClosed").textContent=( openClosed );
})();
*/
