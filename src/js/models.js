export var diners = 100;

export var chabola = [];
export var cases = [];
export var chalets = [];
export var hotels = [];

export class construccio {
  nom;
  cost;
  alquiler;

  constructor(nom, cost, alquiler) {
    this.nom = nom;
    this.cost = cost;
    this.alquiler = alquiler;
  }

  increment() {
    diners = diners + this.alquiler;
  }

  pagar() {
    diners = diners - this.cost;
  }
}

export var listaConstruccions = [
  {
    id: "0",
    name: "chabola",
    src: "./images/chabola.jpg",
    enabled: true,
    cost: 20,
    alquiler: 5
  },
  {
    id: "1",
    name: "casa",
    src: "./images/casa.jpg",
    enabled: true,
    cost: 50,
    alquiler:10
  },
  {
    id: "2",
    name: "chalet",
    src: "./images/chalet.jpg",
    enabled: false,
    cost: 200,
    alquiler: 50

  },
  {
    id: "3",
    name: "hotel",
    src: "./images/hotel.jpg",
    enabled: false,
    cost: 500,
    alquiler: 100
  },
];

export function restarDiners(cantidad) {
  diners = diners - cantidad;
}

export var gameBoard = [
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],

  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
];

// Pinta untauler blanc amb les caselles marcades per una linea negra, representacio de gameBoard superior
export function renderNewTablero() {
  var container = document.getElementById("canvas");
  var ctx = container.getContext("2d");
  ctx.clearRect(0, 0, 300, 300);
  gameBoard.forEach((value, y) => {
    value.forEach((value, x) => {
      ctx.beginPath();
      ctx.rect(x * 30, y * 30, 30, 30);
      ctx.strokeStyle = "black";
      ctx.stroke();
    });
  });
}

// marca totes les caselles que ocupa una construcció amb el valor del seu id
export function marcarTablero(x, y, gameId) {
  (gameBoard[y][x] = gameId),      (gameBoard[y][x + 1] = gameId),     (gameBoard[y][x + 2] = gameId);
  (gameBoard[y + 1][x] = gameId),  (gameBoard[y + 1][x + 1] = gameId), (gameBoard[y + 1][x + 2] = gameId);
  (gameBoard[y + 2][x] = gameId),  (gameBoard[y + 2][x + 1] = gameId), (gameBoard[y + 2][x + 2] = gameId);
  (gameBoard[y + 3][x] = gameId),  (gameBoard[y + 3][x + 1] = gameId), (gameBoard[y + 3][x + 2] = gameId);
}

// Cerca si hi ha espai dins el tauler per col·locar una peça de 3x4 donada la posicio inicial
export function espacioTablero(x, y) {
    if (
      x >= 18 ||
      y >= 17 ||
      gameBoard[y][x] !== 9 ||
      gameBoard[y][x + 1] !== 9 ||
      gameBoard[y][x + 2] !== 9 ||
      gameBoard[y + 1][x] !== 9 ||
      gameBoard[y + 1][x + 1] !== 9 ||
      gameBoard[y + 1][x + 2] !== 9 ||
      gameBoard[y + 2][x] !== 9 ||
      gameBoard[y + 2][x + 1] !== 9 ||
      gameBoard[y + 2][x + 2] !== 9 ||
      gameBoard[y + 3][x] !== 9 ||
      gameBoard[y + 3][x + 1] !== 9 ||
      gameBoard[y + 3][x + 2] !== 9
    ) {
      return false;
    }
  return true;
}

// Al perdre les cases totes les posicions que tinguin un 1, que representa un espai ocupat per una casa
// tornará espai NOU
export function perderCasas() {
  for (let y = 0; y < gameBoard.length; y++) {
    for (let x = 0; x < gameBoard[y].length; x++) {
      if (gameBoard[y][x] === 1) {
        gameBoard[y][x] = 9;
      }
    }
  }
  // limpiarTablero();
}


// Aquesta funció era l'encarregada de tornar  a pintar el tauler per damunt per resetear sol·lament les caselles que
// estan marcades com 9
// Problema  les imatges estan a una capa superior del tauler, hi ha que esborrar l'objecte (?)
/* 
function limpiarTablero() {
  for (let y = 0; y < gameBoard.length; y++) {
    for (let x = 0; x < gameBoard[y].length; x++) {
      if (gameBoard[y][x] === 9) {
       
        var container = document.getElementById("canvas");
        var ctx = container.getContext("2d");
      
        ctx.clearRect(x * 30, y * 30, 30, 30);

      }
    }
  }
} 
*/

// Devuelve las coordenadas calculadas dentro del canvas
export function findCoord(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return {
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top),
  };
}


// Infracció: si tens chaboles y tens mes de 200 euros, perds tot els diners.
export function infraccio() {
  if (chabola.length > 0) {
    if (diners > 200) {
      diners = diners - 200;
    } else if (diners < 200) {
      diners = 0;
    }
    alert("Perds 200 monedes per tenir chabola/s");
    console.log("INFRACCIO PER TENIR CHABOLAS");
  } else {
    alert("No tens cap chabola,t'has salvat de perdre doblers");
    console.log("NO TENDRAS LA INFRACCIO PER TENIR CHABOLAS");
  }
}

// Premi: Si no tens chaboles rebs doblers
export function premi() {
  if (chabola.length < 1 && hotels.length > 0) {
    alert(
      "Et donam un premi per tenir construccions que no son chabolas :D"
    );
    alert("Has rebut 100 monedes");
    console.log("PREMI PER NO TENIR CHABOLAS");
    diners = diners + 100;
  } else {
    alert("No et podem donar el premi ja que no compleixes els requisits");
    console.log("NO OBTENS EL PREMI PER NO TENIR CHABOLAS");
  }
  
}

// Crisi: Pers totes les cases
export function crisi() {
  alert("Has perdut totes les cases si tenies !!! ");
  if (cases.length>0){
    console.log("PERDS TOTES LES CASES");
    cases = [];
    // No esborram els objectes, solament asignam un array buit, per aixó no podem esborrar les imatges del canvas
    perderCasas();

  }else{
    console.log("No tens cases o sigui que no les perds");
  }
}

// Transforma les chaboles en cases
export function chabolaToCasas() {
  alert("Si tens chabolas ara es convertiran en cases!!!");
  if (chabola.length > 0) {
    for (var x = 0; x < chabola.length; x++) {
      let b = new construccio("Casa", 20, 30);
      cases.push(b);
    }
    chabola = [];
    console.log("CHABOLAS CONVERTIDES A CASES!!!");
    
    // 0 son chaboles 1 son cases, utilitzem els seus id per pintar-los
    transformarConstruccio(0,1);

    /*
    Els arrays y el tauler s'actualitza, les imatges renderitzades no 
    */
  } else {
    console.log("NO TENS CHABOLAS,NO POTS UPGRADEARLES A CASES");
  }
}

// Itera el taulell y cambia un tipus de construccio per altre
export function transformarConstruccio(inicial, nova) {
  for (let y = 0; y < gameBoard.length; y++) {
    for (let x = 0; x < gameBoard[y].length; x++) {
      if (gameBoard[y][x] === inicial) {
        gameBoard[y][x] = nova;
      }
    }
  }
}