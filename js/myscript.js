/*
L’utente indica un livello di difficoltà in base al quale viene generata
una griglia di gioco quadrata, in cui ogni cella contiene un numero tra
quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

let bottonePlay = document.getElementById("play");

bottonePlay.addEventListener("click" ,function(){
    let scelta = document.getElementById("mySelect").value;

    caselle.innerHTML = "";

    if(scelta == "facile"){
        for(i=1; i<=100; i++){
            caselle.innerHTML += `<div class="quadrato colora col-1 item-${i}">${i}</div>`;
        }

    }else if(scelta == "media"){
        for(i=1; i<=81; i++){
            caselle.innerHTML += `<div class="quadrato2 colora col-1 item-${i}">${i}</div>`;
        }
    }else{
        for(i=1; i<=49; i++){
            caselle.innerHTML += `<div class="quadrato3 colora col-1 item-${i}">${i}</div>`;
        }
    }
    let caselleColorate = document.getElementsByClassName("colora");
    for(i = 0 ; i < caselleColorate.length; i++){
        caselleColorate[i].addEventListener("click", function(){
        this.classList.add("colorate");
        console.log(this.innerHTML)
        })
    }
    for (i = 0; i < 16 ;) {
        let numeriRandom = Math.floor(Math.random() * 100 + 1);
        //se 
        if(!numeriBombeArray.includes(numeriRandom)){
            numeriBombeArray.push(numeriRandom);
            i++;
        }
    }
});

/*Il computer deve generare 16 numeri casuali nello stesso range
della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti
la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo
possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
che l’utente ha cliccato su una cella che non era una b. */

//creiamo un array vuoto
let numeriBombeArray = [];
console.log(numeriBombeArray);


//creiamo un ciclo for per generare 16 numeri che saranno le bombe


/*let caselleBombe = document.getElementsByClassName("colora");
    for(i = 0 ; i < caselleBombe.length; i++){
        caselleBombee[i].addEventListener("click", function(){
        this.classList.add("casellabomba");
        console.log(this.innerHTML)
        })
    }*/