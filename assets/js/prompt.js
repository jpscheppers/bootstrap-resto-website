
var myName = sessionStorage.getItem("myName");

if(!myName){
    myName = prompt("Cher visiteur, quel est votre prénom?");
    sessionStorage.setItem("myName", myName);
}
document.getElementById("promptname").textContent= myName;
