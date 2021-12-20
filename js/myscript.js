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
            caselle.innerHTML += `<div class="quadrato col-1 item-${i}">${i}</div>`;
        }

    }else if(scelta == "media"){
        for(i=1; i<=81; i++){
            caselle.innerHTML += `<div class="quadrato col-1 item-${i}">${i}</div>`;
        }
    }else{
        for(i=1; i<=50; i++){
        caselle.innerHTML += `<div class="quadrato col-1 item-${i}">${i}</div>`;
        }
    }
    let caselleColorate = document.getElementsByClassName("quadrato");
    for(i = 0 ; i < caselleColorate.length; i++){
        caselleColorate[i].addEventListener("click", function(){
        this.classList.add("colorate");
        })
    }

});

