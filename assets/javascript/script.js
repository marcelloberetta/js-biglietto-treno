
//RICHIESTA CHILOMETRI DA PERCORRERE
var kmDistance = parseInt (prompt("Quanti chilometri dovrai percorrere ?"));
// *DEBUG* console.log(kmDistance);


if (kmDistance >= 420){
alert("Si prega di inserire il chilometraggio esatto, la nostra rete ferroviaria si estende per un totale di 420km");
}

//RICHIESTA ETA' PASSEGGERO

var passengerAge = parseInt (prompt("Quanti anni ha il passeggero che viaggerà ?"));
// *DEBUG*  console.log(passengerAge);


var prezzoPieno = (0.21 * kmDistance);

var prezzoIntero = prezzoPieno.toFixed(2);

var priceKm= 0.21;


var scontoMinorenni = (prezzoPieno * 0.80);

var scontoUnder18 = scontoMinorenni.toFixed(2);

var scontoOver65 = (prezzoPieno * 0.60);

var sconto65 = scontoOver65.toFixed(2);




if (passengerAge < 18 ){

 document.getElementById("prezzoBiglietto").innerHTML = "Il prezzo del tuo biglietto sarà " + scontoUnder18 + " €";
}

if (passengerAge > 18 && passengerAge <= 65){

   document.getElementById("prezzoBiglietto").innerHTML = "Il prezzo del tuo biglietto sarà " + prezzoIntero + " €";

   
} 

if (passengerAge > 65){

   document.getElementById("prezzoBiglietto").innerHTML = "Il prezzo del tuo biglietto sarà " + sconto65 + " €";
}




