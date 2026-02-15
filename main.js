//abbiamo creato le costanti e selezionato i loro elementi tramite l'id
//qui creiamo la costante lamp
const lampEl=document.getElementById("lamp")
//qui creiamo la costante img-on per la lampadina spenta
const lampOff=document.getElementById("img-off")
//qui creiamo la costante img-off per la lampadina accesa
const lampOn=document.getElementById("img-on")
//qui creiamo la costante switchEl per la funzione del bottone 
const button=document.getElementById("switch")
console.log(lampEl,lampOn,lampOff,button);


//qui apriamo un dom , per l'evento della lampadina
// accesa e spenta al click del pulsante
button.addEventListener("click",function(){
    console.log("click del pulsante")
    //qui se l'inner html del nostro button contiene la parola accendi al momento del click 
    if (button.innerHTML.includes("accendi")) {
        //l'img della lampadina bianca scompare tramite la funzione .add che inseriremo 
        lampOff.classList.add("d-none")
        //di conseguenza dovremo far comparire la lampadina gialla togliendo il d-none gia impostato 
        lampOn.classList.remove("d-none")
        //di conseguenza si passa al bottone facendogli cambiare la scritta in "spento" sovrascrivendogli l'innerHTML
        button.innerHTML="spegni";
    }
    //altimenti se la nostra azione deve essere svolta al contrario faremo esattamente l'opposto
    else{
        //qui aggiungiamo il d-none alla nostra img-On
        lampOn.classList.add("d-none")
        //qui rimuoviamo il d-none dalla nostra img-Off
        lampOff.classList.remove("d-none")
        //e qui cambiamo il testo da spegni ad accendi
        button.innerHTML="accendi";
    }
}
)

