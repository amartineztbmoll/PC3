"use strict";

import * as models from "./models.js"

//Variables utils dins el joc
var listPersonatges = [];
//Personatge que haurem triat
var pers;
var error = true;
var nick;
//Imatge que ens sortirà a la pantalla del joc
var imgfinal;
//Construccio que seleccionarem
var selectedConstruction;
var pos;
//Utils
var flag = true;
var flag2 = true;


window.onload = function () {
  show();
  document.getElementById("juga").addEventListener("click", jugar);
};
//Capturar personatges
function getPersonatges() {
  return fetch(
    "https://my-json-server.typicode.com/classicoman2/fakeRESTserver/personatges"
  );
}

//Funció per mostrar els personatges quan carregam la pantalla
function show() {
  getPersonatges()
    .then((data) => data.json())
    .then((personatges) => {
      listPersonatges = personatges;
      //cridada a la funcio que mostra els personatges amb el paràmetre personatges(la llista de personatges)
      showPersonatges(personatges);
      console.log(personatges);
    });
}
//funcio per mostrar mitjançant appendChild el contingut dels personatges
function showPersonatges(personatges) {
  personatges.map((nick, i) => {
    var nombre = document.createElement("p");
    var foto = document.createElement("img");
    var contenedor = document.createElement("div");
    var idContenedor = document.createElement("span");
    foto.src = nick.img;

    nombre.innerHTML =
      "<div><br><br><b>Name:</b>" +
      "<span>" +
      nick.name +
      "</span>" +
      " </div><div><br><br><b>Motto:</b></div>" +
      nick.motto;
    idContenedor.innerHTML = nick.id;
    personatge.appendChild(contenedor);
    contenedor.appendChild(idContenedor);
    contenedor.appendChild(nombre);
    contenedor.appendChild(foto);
    nombre.setAttribute("class", "nom");
    foto.setAttribute("class", "foto");
    contenedor.setAttribute("class", "contenedor");
    idContenedor.setAttribute("id", "idCont");
    contenedor.setAttribute("id", nick.name);
    contenedor.addEventListener("click", savePersonatges);
  });
}

//Funció per guardar el personatge i la imatge del personatge
function savePersonatges() {
  //Com al personatge li hem declarat com a id el seu nom ara podem recuperarlo agafant el seu id
  pers = this.id;
  //For per poder accedir dins l'array de lisPersonatges
  for (var x = 0; x < listPersonatges.length; x++) {
    //Comprobar si la posicio es igual a la variable on està guardat el personatge triat per obtenir l'imatge
    if (listPersonatges[x].name == pers) {
      imgfinal = listPersonatges[x].img;
    }
  }
  //Mostrar el personatge seleccionat
  document.getElementById("seleccionat").innerHTML =
    "<h2 class='fondoColor'>Has seleccionat:" + pers + "</h2>";
  localStorage.setItem("personatge", JSON.stringify(pers));
  error = false;
}
//funcio per començar el joc 
function jugar() {
  nick = document.getElementById("name").value;
  localStorage.setItem("nick", JSON.stringify(nick));

  if (nick.length < 1) {
    alert("Introdueix un nombre");
  } else if (error == true) {
    alert("Has de seleccionar un personatge");
  } else {
    //Carregar la pantalla de joc
    loadScreen();
  }
}
//Carregar elements de la pantalla de joc 
function loadScreen() {
  document.getElementById("divpr").style.display ="block";
  document.getElementById("load").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  //Seleccionar elements del localstorage
  var pers = JSON.parse(localStorage.getItem("personatge"));
  var nick = JSON.parse(localStorage.getItem("nick"));
  console.log(pers, nick);
  document.getElementById("pers").innerHTML =
    "<h2>Personatge triat:<br>" + pers + "</h2>";
  document.getElementById("jugador").innerHTML =
    "<h2>Benvingut al joc " + nick + "!</h2>";
  var foto = document.createElement("img");
  //imgfinal sera la que ens sortira a la pantalla de joc,la del personatge
  foto.src = imgfinal;
  userimg.appendChild(foto);
  foto.setAttribute("class", "imgpers");

  loadGame();
}

// Carregar tablero de juego
function loadGame() {
  //crear canvas
  models.renderNewTablero();
  loadConstructions();
  paintConstruction();
  //intervals del joc
  setInterval(capital, 1000);
  setInterval(incrementDiners, 5000);
  setInterval(intervalSorpresa, 30000);
}
//interval cada 30 segons que tendrà un event aleatori entre cuatre funcions
function intervalSorpresa() {
  var mySound = new sound("sound/grito.wav");
  mySound.play();
  let event = Math.floor(Math.random() * 4) + 1;
  //Cridam a la funcio que toqui depenent del resultat
  switch (event) {
    case 1:
      models.infraccio();
      break;
    case 2:
      models.premi();
      break;
    case 3:
      models.crisi();
      break;
    case 4:
      models.chabolaToCasas();
      break;
  }
}

// Pintar la lista de construccions html
function loadConstructions() {
  for (const item of models.listaConstruccions) {
    var foto = document.createElement("img");
    document.getElementById("containerImg").appendChild(foto);
    foto.setAttribute("src", item.src);
    foto.setAttribute("id", item.id);
    foto.setAttribute("class", "construction");
    foto.onclick = function () {
      //condicio per habilitat els chalets en cas de tenir 2 chabolas i 2 cases
      if (
        item.id == 2 &&
        models.cases.length > 1 &&
        models.chabola.length > 1 &&
        flag == true
      ) {
        enableChalets();
      //comprobar si esta habilitada la construccio
      } else if (item.enabled == false) {
        alert("Construccio deshabilitada!!");
      } else {
        var mySound = new sound("sound/wow.wav");
        mySound.play();
        alert("Has triat " + item.name);
        alert("Et costarà " + item.cost + "$!");
        //selectedconstruction sera ara la construccio la qual haguem fet click
        selectedConstruction = item;
        //comprobar el id de la construccio 
        pos = item.id;
      }
    };
  }
}
//funcio per construir l'objecte i la imatge pasant per condicions
function paintConstruction() {
  canvas.addEventListener(
    "click",
    function (evt) {
      try {
        if (models.diners <= 0) {
          alert("no tens doblers");
          //si el que val la construccio es major que el que tenim no podrem pagarlo
        } else if (models.diners < models.listaConstruccions[pos].cost) {
          alert("No tens diners suficients per pagar-lo!!");
        } else {
          if (selectedConstruction === undefined) {
            alert("Has d'indicar la construcció");
          } else {
            //tenim la construccio seleccionada,llavors podem crear la construccio
            pintarImage(evt);
          }
        }
      } catch (error) {
        alert("Has de seleccionar una construcció");
      }
    },
    false
  );
}

// Pinta construccio en el tablero
function pintarImage(evt) {
  //Capturar cordenades
  var mousePos = models.findCoord(canvas, evt);
  var posicionX = parseInt(String(mousePos.x / 30), 10);
  var posicionY = parseInt(String(mousePos.y / 30), 10);
  var pixelX = parseInt(String(mousePos.x / 30), 10) * 30;
  var pixelY = parseInt(String(mousePos.y / 30), 10) * 30;
  //Comprobar si compreix les condicions per poder ser creada dins el canvas
  if (models.espacioTablero(posicionX, posicionY)) {
    var context = document.getElementById("canvas");
    var ctx = context.getContext("2d");
    var foto = document.createElement("img");
    foto.src = selectedConstruction.src;
    ctx.drawImage(foto, pixelX, pixelY, 90, 120);
    //Pintar els elements com a imatges
    models.marcarTablero(posicionX, posicionY, selectedConstruction.id);
    //Guardar els elements internament
    guardarConstruccion();
  }
}

function guardarConstruccion() {
  var mySound = new sound("sound/cash.mp3");
  mySound.play();
  //Crear construccio depenent del id que tenguem dins la construccio creada amb el seu id
  switch (selectedConstruction.id) {
    case "0":
      let a = new models.construccio("Chabola", 20, 5);
      a.pagar();
      models.chabola.push(a);
      break;
    case "1":
      let b = new models.construccio("Casa", 50, 10);
      b.pagar();
      models.cases.push(b);
      break;
    case "2":
      let c = new models.construccio("Chalet", 200, 50);
      c.pagar();
      models.chalets.push(c);
      break;
    case "3":
      let d = new models.construccio("Hotel", 500, 100);
      d.pagar();
      models.hotels.push(d);
      break;
  }
} 
//funcio per incrementar els diners tant internament com per consola
function incrementDiners() {
  //Diners totals per cada iteració amb aquesta funció
  var totalinterval = 0;
  var chab = "Chabola 0x0 +";
  var cas = " Casa 0x0 +";
  var cha = "Chalet 0x0 +";
  var hot = "Hotel 0x0";
  models.chabola.forEach((c) => {
    //incrementar el alquiler.Aumentam els diners per el cost d'alquiler que te
    c.increment();
    chab = c.nom + " , " + models.chabola.length + "x" + c.alquiler;
    totalinterval += c.alquiler;
  });
  models.cases.forEach((c) => {
    //incrementar el alquiler.
    c.increment();
    cas = "+ " + c.nom + " , " + models.cases.length + "x" + c.alquiler;
    totalinterval += c.alquiler;
  });
  models.chalets.forEach((c) => {
    //incrementar el alquiler.
    c.increment();
    cha = "+ " + c.nom + " , " + models.chalets.length + "x" + c.alquiler;
    totalinterval += c.alquiler;
  });
  models.hotels.forEach((c) => {
    //incrementar el alquiler.
    c.increment();
    hot = "+ " + c.nom + " , " + models.hotels.length + "x" + c.alquiler;
    totalinterval += c.alquiler;
  });
  //console.log del resultat
  console.log(chab, cas, cha, hot + " = " + totalinterval);
}
//mostrar la quantitat total de diners 
function capital() {
  document.getElementById("diners").innerHTML = models.diners;
  //Poder adquirir hotels depenent de la condicio
  if (flag2 == true && models.cases.length > 2 && models.chalets.length > 2) {
    granEmpresari();
    flag2 = false;
  }
}
//Activar la compra de hotels
function granEmpresari() {
  alert(
    "Ara pots construir hotels!!!Tens mes de dues cases i mes de dos chalets"
  );
  models.listaConstruccions[3].enabled = true;
}
//Activar la compra de chalets
function enableChalets() {
  var msg = confirm("Vols pagar 100 monedes i poder construir hotels?");
  if (msg == true && models.diners >= 100) {
    //Funcio que resta els diners totals per poder desbloquetjar els chalets
    models.restarDiners(100);
    models.listaConstruccions[2].enabled = true;
    alert("Ara pots comprar chalets");
    flag = false;
  } else if (models.diners < 100) {
    alert("no tens diners");
  } else if (msg == false) {
    flag = false;
  }
}

function sound(src) {
  //Crea un element d’audio
  this.sound = document.createElement("audio");
  console.log(src);
  this.sound.src = src;
  //El so estarà disponible per executar un cop carregat
  this.sound.setAttribute("preload", "auto");
  //No apareixen en pantalla els controls
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
