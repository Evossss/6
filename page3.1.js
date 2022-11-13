var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "Allez au bâtiment K"){
        reponse.value=""; //lien de la page suivante 
    }
    else{reponse.value="Falsche Antwort";
}
    }



