/**
 * Created by mohamed.msaad on 28/05/2017.
 */

/*--------------------------------------------------------------------------------------------------------------------
                                    show-hide sezione donazione
--------------------------------------------------------------------------------------------------------------------*/
function showhide() {

    var divid = document.getElementsByClassName("container-transfer");
    //divid[0].style.display = 'none';
    //for(var i=0;i<divid.length;i++) {
        if (divid[0].style.display === 'none') {
            $(divid[0]).show("slow");
            divid[0].style.display = "flex";
        } else {
            $(divid[0]).hide("slow");
            divid[0].style.display = 'none';
        }
    //}
}


/*--------------------------------------------------------------------------------------------------------------------
                                        sezione tabs audio
 --------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
//Quando la pagina viene caricata
    $(".blocco-tab").hide(); //nascondi tutti i contenuti delle tabs
    $("ul.tabs li:first").addClass("active").show(); //Attiva la prima tab
    $(".blocco-tab:first").show(); //Mostra il contenuto della prima tab

    //Al click sulla linguetta della tab
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("active"); //Rimuovi ogni classe "active"
        $(this).addClass("active"); //E aggiungila solo a quella su cui ho cliccato
        $(".blocco-tab").hide(); //Nascondi tutti i contenuti delle tab

        var activeTab = $(this).find(".tab").attr("href"); //Trova l'href per identificare in modo univoco la tab ed il contenuto
        $(activeTab).fadeIn(); //Mostrami quest'ultimo con effetto di fadeIn
        return false;
    });
});


/*
 FARE ATTENZIONE ALL'ORDINE DEI divs
 in base a quanti ne sono stati inseriti nella index.html
 aggiungere lo stesso codice per il numero di video che si vogliono visualizzare
 seguire la seguente sequenza 1-2-0 / 4-5-1 / 7-8-2 / 10-11-3 / 13-14-4
*/

function rotateImage(div,video,arrow){
    var divs=$("#div-video div");

    $(divs[div]).addEventListener("click",esegui(video,arrow));

    return false;
}


function esegui(i,arrow) {
    var figlio = $("#div-video div")[i];
    var img = $("#div-video img")[arrow];
    if (figlio.style.display === 'none') {
        img.removeAttribute("class", "unrotated-image")
        img.setAttribute("class", "rotated-image");
        $(figlio).show("slow");
        figlio.style.display = "inline-block";
    } else{
        img.removeAttribute("class", "rotated-image")
        img.setAttribute("class", "unrotated-image");
        $(figlio).hide("slow");
        figlio.style.display = 'none';
    }
}


/*sezione invio messagggio*/

function verificaEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function controlloForm() {
  var nome = document.forms["formmail"]["nome"].value;
  var email = document.forms["formmail"]["email"].value;
  var msg = document.forms["formmail"]["msg"].value;

  if (nome == "" || email == "" || msg == "") {
    alert("I campi Nome, Email e Messaggio sono obbligatori!");
    return false;
  }
  else if (verificaEmail(email) !== true) {
    alert("L'indirizzo email non sembra corretto!");
    return false;  
  }else{
    return true;
  }
}


