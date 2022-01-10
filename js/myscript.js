/*PT1
L’utente indica un livello di difficoltà in base al quale viene generata
una griglia di gioco quadrata, in cui ogni cella contiene un numero tra
quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/*PT2
Il computer deve generare 16 numeri casuali nello stesso range
della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti
la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo
possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
che l’utente ha cliccato su una cella che non era una b. */

let bottonePlay = document.getElementById("play");
let caselle = document.getElementById("caselle");
let messVittoria = document.getElementById("messaggio")


let numeriBombeArray = [];


function tutteLeBombe() {
    for (i = 0; i < caselleColorate.length; i++) {
        if(numeriBombeArray.includes(parseInt(caselleColorate[i].innerHTML))){
            caselleColorate[i].classList.add("casellabomba")
            caselleColorate.innerHTML += "&#128163;"
        } 
    }
    const bloccoDiv = document.getElementById("finegioco");
        bloccoDiv.classList.remove("fine_gioco") 
        bloccoDiv.classList.add("game_over")
        const rigioca = document.getElementById("rigioca")
        rigioca.classList.add("rigioca")
}


function generaQuadrati (numeroCelle) {
    for(i=1; i<= numeroCelle; i++){
        caselle.innerHTML += `<div id="scatole" class="quadrato colora col-1 item-${i}">${i}</div>`;
    }
    function numeriRandomBombe(numeriRandom){
        console.log(numeriBombeArray)
        while (numeriBombeArray.length < numeriRandom ) {
            let numeriRandom = Math.floor(Math.random() * numeroCelle + 1);
            
            if(!numeriBombeArray.includes(numeriRandom)){
                numeriBombeArray.push(numeriRandom);
            }
            
        }
        
    }
    numeriRandomBombe ( 16 )
    console.log(numeriBombeArray)
}


let caselleColorate = document.getElementsByClassName("colora");


bottonePlay.addEventListener("click" ,function(){
    numeriBombeArray =[];
    let scelta = document.getElementById("mySelect").value;

    caselle.innerHTML = "";

    if(scelta == "facile"){
        
        generaQuadrati (100);
        
    }else if(scelta == "media"){

        generaQuadrati (81);
        
    }else{

        generaQuadrati (49);

    }


    
    for(i = 0 ; i < caselleColorate.length; i++){
        caselleColorate[i].addEventListener("click", function(){
        const numeroCelle = parseInt(this.innerHTML);
        this.classList.add("colorate");
        if(numeriBombeArray.includes(numeroCelle)){
            tutteLeBombe()
            alert("hai preso la bomba num" +" "+ this.innerHTML +" ," + "HAI PERSO!")
            console.log("hai preso la bomba num" +" "+ this.innerHTML)
            //tutteLeBombe()
            //messVittoria.innerHTML = ("Hai perso! hai fatto" + numeroCelle + "giocate!")
        }   
        console.log(this.innerHTML);
        })
    }
});




































/*let caselleBombe = document.getElementsByClassName("colora");
    for(i = 0 ; i < caselleBombe.length; i++){
        caselleBombee[i].addEventListener("click", function(){
        this.classList.add("casellabomba");
        console.log(this.innerHTML)
        })
    }*/