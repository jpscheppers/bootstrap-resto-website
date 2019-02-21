


// display date

  var d = new Date();
  var userDay = d.getUTCDate();
  var userMonth =  d.getMonth();
  var userYear = d.getFullYear();
  var userHour = d.getHours();
  var userMinute = d.getMinutes();

  var weekday = new Array(7);
  weekday[0] = "dimanche";
  weekday[1] = "lundi";
  weekday[2] = "mardi";
  weekday[3] = "mercredi";
  weekday[4] = "jeudi";
  weekday[5] = "vendredi";
  weekday[6] = "samedi";

  var openOrClosed = "";

  var currentDay = weekday[d.getDay()];

  var monthName = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  var currentMonth = monthName[d.getMonth()];

  // proper numbers fix
  userMonth = (userMonth + 1);

  /* console.log(d);
  console.log(userDay);
  console.log(userMonth);
  console.log(userYear);
  console.log(monthName); */


  // display  0 in front of months and days < 10 and hours < 10 and minutes < 10
    if (userMonth < 10) {
      userMonth = ('0' + userMonth);
    };
    if (userDay < 10) {
      userDay = ('0' + userDay);
    };
    if (userHour < 10) {
      userHour = ('0' + userHour);
    }
    if (userMinute < 10) {
      userMinute = ('0' + userMinute);
    }
    //console.log(userHour);
    //console.log(userMinute);

    if ((currentDay === "dimanche") || (currentDay === "lundi") || (userHour < 12)) {
      openOrClosed = "fermés";
      //console.log(currentDay);
      //console.log(openOrClosed);
    } else {
      openOrClosed = "ouverts";
      //console.log(currentDay);
      //console.log(openOrClosed);
    };


// display date in HTML, but only do it if on the restaurant page, to avoid a console error
function displayDate(){
  document.getElementById("myDate").textContent=(currentDay + ' ' + userDay + ' ' + currentMonth + ' ' + userYear + ' - ' + userHour + ':' + userMinute);
  document.getElementById("openClosed").textContent=( openOrClosed );
};
var myPage = document.title;
if (myPage == "Soylent Green Fine Cuisine - Restaurants"){
  displayDate();
};
