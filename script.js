

function validar(){
    var error=true;
    var name=document.getElementById("name");
    var surname=document.getElementById("sname");
    var email=document.getElementById("email");
    var email2=document.getElementById("email2");
    var username=document.getElementById("uname");
    var tlf=document.getElementById("tlf");

    if(name.lenght>5){
        error=false;
    }

    if(error==false){
        alert("correcte");
    }else{
        //si no donara error
        alert("Incorrecte");
    }
}


    document.getElementById("submit").addEventListener("click", validar);
  
