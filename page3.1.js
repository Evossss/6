var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "Allez au bâtiment K"){
        reponse.value="https://evossss.github.io/7/"; 
    }
    else{reponse.value="Falsche Antwort";
}
    }



