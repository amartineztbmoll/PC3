

function validar(){
    var error=false;
    var name=document.getElementById("name");
    var surname=document.getElementById("sname");
    var email=document.getElementById("email");
    var email2=document.getElementById("email2");
    var username=document.getElementById("uname");
    var tlf=document.getElementById("tlf");

    if (name.length<=5 || name.length>=10){
        error=true;
    }

    if(error==false){
        alert("correcte");
    }else{
        //si no donara error
        alert("Incorrecte");
    }
}

window.onload = function () {
    document.getElementById("submit").addEventListener("click", validar);
  };
