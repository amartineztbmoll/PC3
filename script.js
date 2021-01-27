var error=false;

const BASE_URL =
  "https://restcountries.eu/rest/v2";

const getCountries = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/all`);

    const todos = res.data;

    pintarCountries(todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};

function pintarCountries(countries) {

    countries.map((country,i) => {
      var contenedor= document.createElement("option");
      valor=country.name;
      contenedor.innerHTML =  country.name;
      paisos.appendChild(contenedor);
      contenedor.setAttribute("value",valor);

     
    })
}

window.onload = function (){
    getCountries();
    validarform();

};

function validarform(){
  document.getElementById("span1").onclick = mostrar;
    document.getElementById("span2").onclick = mostrar2;
  
    document.getElementById("sign").onclick = function () {
        var name=document.getElementById("name").value;
        var sname=document.getElementById("sname").value;
        var uname=document.getElementById("uname").value;
        var pais=document.getElementById("paisos").value;
        var email=document.getElementById("email").value;
        var email2=document.getElementById("email2").value;
        var passwd=document.getElementById("passwd").value;
        var passwd2=document.getElementById("passwd2").value;
        var tlf=document.getElementById("tlf").value;
        
        //name
        if(name.length>20){
          error=true;
          document.getElementById("errorn").innerHTML="Longitud màxima superada";
        }else if(name.length==0){
          error=true;
          document.getElementById("errorn").innerHTML="Nom buit";
        }else{
          error=false;
          document.getElementById("errorn").innerHTML="";
        }
        //surname

        if(sname.length>30){
            error=true;
            document.getElementById("errors").innerHTML="Longitud màxima superada";
          }else if(sname.length==0){
            error=true;
            document.getElementById("errors").innerHTML="Cognom buit";
          }else{
            error=false;
            document.getElementById("errors").innerHTML="";
          }

        
        //passwd 

        var expreg2 = /^[A-Z]{6}[0-9]{3}$/;
        let valor=expreg2.test(passwd);
        if((passwd.length==0) || (passwd2.length==0)){
          error=true;
          document.getElementById("errorp").innerHTML="Contrasenya buida";
        }else if(passwd!=passwd2){
          error=true;
          document.getElementById("errorp").innerHTML="Les contrasenyes no coincideixen!";
        }else{
          if(valor==true){
            error=false;
            document.getElementById("errorp").innerHTML="";
          }else{
            document.getElementById("errorp").innerHTML="La contrasenya ha de tenir 6 lletres MAJUSCULES seguit de 3 numeros";
            error=true;
          }
        }

        
        

        //email
        

        var expreg3 =  /^([a-zA-Z]+)@([a-z]{1,20}).([a-z]{2,3})$/;
        let valor2=expreg3.test(email);
        if((email.length==0) || (email2.length==0)){
          error=true;
          document.getElementById("errore").innerHTML="Email buid";
        }else if(email!=email2){
          error=true;
          document.getElementById("errore").innerHTML="Els emails no coincideixen!";
        }else{
          if(valor2==true){
            error=false;
            document.getElementById("errore").innerHTML="";
          }else{
            email.split(".").forEach(
              value =>{
    
                  if(value.includes("com") || value.includes("net") || value.includes("es")){
                      error=false;
                      document.getElementById("errore").innerHTML="";
                  }else{
                      error=true;
                      document.getElementById("errore").innerHTML="No conte .com o .net o .es";
                  }
              }
          )
          }
        }

        //username 
        
        if(uname==""){
          error=true;
          document.getElementById("erroru").innerHTML="Username buit";
        }else{
          validarun();
        }

        //tlf 
        
        if(tlf==""){
          error=true;
          document.getElementById("errort").innerHTML="Telefon buid";
        }else{
          validartlf();
          
        }

        
      //comprobar si estan buids

      if(name=="" || sname=="" || uname=="" || email=="" || passwd==""|| tlf=="" ){
        error=true;
      }
        
       
          //Crear el formulari 
          if(error==true){
              console.log("Form incorrecte");
              //focus en el name si esta buid
              if(name==""){
                focusm();
              }
             
          }else{
            let usuari = {
                nom: name,
                sname: sname,
                email:email,
                passwd:passwd,
                uname:uname,
                tlf:tlf,
                tlf:tlf,
                pais:pais,
              };
              alert("S'ha realitzar el registre");
            console.info(usuari);
          }
      
    }
}

function validarun(){
  let uname=document.getElementById("uname").value;
  let expreg1 = /^[u]{1}[0-9]{6}[A-Z]{1}$/;
  let valor=expreg1.test(uname);

  if(valor==true){
    document.getElementById("erroru").innerHTML="";
    error=false;
  }else{
    document.getElementById("erroru").innerHTML="Ha de començar per u,seguit de 6 numeros i una MAYUSCULA FINAL ";
    error=true;
  }
}
function validartlf(){
  let tlf=document.getElementById("tlf").value;
  let expreg3 = /^[6,9]{1}[0-9]{2}-[0-9]{6}$/;
  let valor=expreg3.test(tlf);
  if(valor==true){
    document.getElementById("errort").innerHTML="";
    error=false;
  }else{
    document.getElementById("errort").innerHTML="Ha de començar per 6 o 9,despres 2 numeros,un guio i 6 numeros mes";
    error=true;
  }
}

function mostrar(){
  let tip = document.getElementById("passwd");
  if(tip.type == "password"){
    tip.type = "text";
}else{
    tip.type = "password";
}
}
function mostrar2(){
  let tip = document.getElementById("passwd2");
  if(tip.type == "password"){
    tip.type = "text";
}else{
    tip.type = "password";
}
}
function focusm(){
  document.getElementById("name").focus();
}



    
  
