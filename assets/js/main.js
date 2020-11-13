var userKm = prompt("Quanti km prevede la sua tratta?");
var userAge = prompt("Qual è la sua età?");
var price = userKm * 0.21;
var discount1 = ((price * 20) / 100);
var discount2 = ((price * 40) / 100);
if  (userAge < 18){
(price = price - discount1);
} else if (userAge > 65) {
(price = price - discount2);
}
document.getElementById('scrivi').innerHTML =
"Il prezzo del suo biglietto è di euro: " + price;
