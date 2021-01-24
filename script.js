

window.onload = function (){

    document.getElementById("sign").onclick = function () {
        
        var error=false;
        var name=document.getElementById("name").value;
        var sname=document.getElementById("sname").value;
        var email=document.getElementById("email").value;
        var email2=document.getElementById("email2").value;
        var passwd=document.getElementById("passwd").value;
        var passwd2=document.getElementById("passwd2").value;
        var uname=document.getElementById("uname").value;
        var tlf=document.getElementById("tlf").value;
        
        
        if(name.length>20){
          error=true;
          document.getElementById("errorn").innerHTML="Longitud màxima superada";
        }
        if(sname.length>30){
            error=true;
            document.getElementById("errors").innerHTML="Longitud màxima superada";
          }
        

          if(error==true){
              console.log("Form incorrecte");
          }else{
            let usuari = {
                nom: name,
                sname: sname,
              };
              alert("S'ha realitzar el registre");
            console.info(usuari);
          }
      
    }

}
function validarun(){
let uname=document.getElementById("uname").value;
var expreg = /^[u]{1}[0-9]{6}[A-Z]{1}$/;
if(uname==expreg){
    alert("correcte");
}else{
    alert("incorrecte");
}


}

    
  
