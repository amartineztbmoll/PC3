Creadors: Ricardo Martínez Rodríguez i Adrià Martínez Tomé

La metodologia de feina que hem utilitzat ha estat fer els commits dins l'altre branca (dev) i pujar aquí la versió final del lloc per tenir un entorn més còmode.

Hem fet cada un un video.Hem mandat els dos videos dins una carpeta al correu del professor

Historial de commits:

https://github.com/amartineztbmoll/BalearicBuildP2/commits/dev/src/js/script2.js

El primer que veim quan entram al joc es la funció show,la qual estarà dins el window.onload i a la vegada invocarà a showpersonatges,que s'encarragarà de mostrar la llista de personatges mitjançant mètodes de DOM i pintarà cada un dels personatges a la pantalla.Abans de cridar a showpersonatges tendrèm que accedir al json,el qual ho feim dins getpersonatges.

Això es carrega només iniciar la pàgina,però desprès tenim que indicar quin personatge volem.Per triar personatge el que farem serà clicar damunt el contenedor dels personatges,el qual està declarat com a variable amb nom "contenedor".Aquest contenedor està asociada a una funció amb addeventlistener ,la qual es savepersonatges.Aquesta funció s'encarrega de guardat tant l'imatge com el nom del personatge,per poder-los dins el localstorage i que ens mostri per pantalla el nom que hem triat.

Una vegada tenim declarat tant el nick name com el personatge podrem procedir a jugar.Hem creat una funció que es diu jugar(),la qual es declara també amb el windows.onload pero necesitam tenir posats el nom i el nick o ens donarà error.Si hem triat personatge i nick name pasarem al joc.

El joc s'inicia amb la funcio loadscreen,la qual s'encarrega de mostrar per pantalla els elements del joc (canvas,persontage triat...).A la vegada aquesta funció fa una cridada a loadgame,el qual es una funcio que utilitzam per interactuar dins el joc i poder fer el joc dinàmic.En aquesta funció es construeix el canvas,les construccions que tendrem disponibles dins el joc,els events amb interval de temps,i ademès la funció paintConstruction,la qual es de la mes important dins del joc ja que s'encarregarà de tant construir la imatge dins del canvas i controlar les coordenades perque no es surti del canvas,i també de construir cada objecte que hem triat prèviament dins la funcio paintconstructions.

El tamany del canvas es de 20x20,i totes les caselles son igual de grans.El mètode que hem utilitzat per crear el canvas ha estat creant un array anomenada gameboard amb la mateixa quantitat de elements dedins per crear cada un dels cuadrats.
La idea es tenir una memòria física de l'estat actual de les dades del tauler,  cada casella del tauler té un número associat dins de cada element de l'array, on per defecte un nou representa new y es espai lliure de construccions, i cada construcció pinta a les caselles pertinents el seu id.D'aquesta manera podem sebre l'estat del tauler en qualsevol moment, i podem fàcilment iterar tots els espais d'un tipus de construcció i sustituir els 1 que son cases per un 2 que son chalets fácilment.Així separam les dades de la renderització, les dades sempre estan ben controlades, la renderització d'imatges en el canvas pinta perfectament, però no pot eliminar imatges en el cavas.

El primer de tot es conseguir la construcció que volem,la qual serà declarada dins la variable global selectedConstruction.Aquesta variable la podrem definir quan haguem selecctionat damunt les construccions que shan creat dins loadconstructions.D'aquesta manera podrem saber quina construcció tendrem que crear en el següent pas.

Quan tenim la construcció seleccionada llavors podem crearla,tant internament dins del joc creant el seu objete com visualment dins el canvas.D'això s'encarrega la funció paintConstruction.Aqui el que feim es primer comprobar si la variable diners es menor que 0 o si el doblers son menors al preu que costa la construcció.Si tenim doblers procedirem a la funcio pintarimage,la qual primer capturarà les coordenades dins el canvas i desprès pasarà per un if el qual sera important,ja que s'encarregarà de comprobar si la posicio es adecuada per poder pintar dins el canvas,i si no,ni pintarà la imatge ni crearà el objecte de la construccio seleccionada.
Si resulta que la posició es vàlida,pintarà la imatge adamunt del canvas correctament.La imatge no es pot sortir del mapa i solaparse una adamunt de una altre.

Quan ha pasat la condició anterior,construirà el objecte depenent de la variable selectedConstruction,seleccionada dins loadconstruction.Hem fet un switch aqui dedins per comprobar el cas que haguem seleccionat i a partir d'aqui crear un objecte amb determinades característiques.Una vegada li haguem indicat tant el nom,preu de compra i alquiler,automaticament iniciarà la funció pagar,la qual ens descontarà els diners que tenim,i ademès,es ficarà dins una variable la qual serà un array que contendrà totes les construccions del tipus creat.Hi haurà una per cada construccio i aixi podrem saber la quantitat de construccions creades de cada tipus.

La clase construccio estarà composada per el mètode constructor del objecte,la funció pagar ,que serveix per llevar-nos diners una vegada l'haguem comprat,i la funcio increment,que servirà per aumentar els diners pasat un interval de temps.

Una de les caracteristiques del joc es el fet de poder guanyar doblers cada cert temps.Per poder fer posible això ,el que feim es fer un setinterval de la funcio capital cada 1 segon.Aquesta funció només s'encarrega de mostrar per pantalla els diners totals cada 1 segon,i ademés té una funció que serveix per poder comprar hotels si es compreixen dels requisits.La funció que s'encarrega de incrementar els diners que guanyam gràcies als alquilers es la de incrementdiners.Aquesta funcio fa un foreach de cada array de les posibles construccions i li aplica a cada element la funcio increment.Ademès també s'encarrega de fer un console.log del que guanyam per cada vegada que s'incrementen aquests doblers,indicant la construcció,la quantitat que tenim de cada una per el que guanyam per cada construccio i el total de la suma de totes elles,tot això cada 5 segons perque sigui un temps raonable.

El darrer event de temps que tenim creat es el de interval sorpresa,el qual ocorr cada 30 segons.Està declarat com a interval sorpresa i té 4 posibilitats mitjançant un event aleatori dins el switch:
-Que es perdin 200 monedes si tenim més de una chabola
-Que ens donin 100 monedes si no tenim cap chabola i tenim al menys 1 hotel,el qual significarà que tenim cases,chalets i 1 hotel com a mínim,es a dir que,que son construccions superiors a chabolas i no tenim cap chabola
-Que perdeguem totes les cases que teniem
-Que totes les chaboles es convertesquin en cases.

Problemes

Hem tengut problemes amb aquests dos darrers events,ja que no hem aconseguit llevar les cases del canvas en el event de perdre cases i tampoc hem intercambiat les chabolas per cases . Per tant a primera vista sembla que no funciona,pero internament si que funciona i els dos events tenen lloc perfectament,ja que les cases son esborrades del array i quan fa la pasada cada 5 segons de incrementdiners es pot comprobar que ja no cobram el alquiler per elles.El mateix succeeix amb les chabolas quan es cambien per les cases.Totes les chabolas pasan a ser cases i començam a cobrar com si fosin cases per cada una de elles i ademes dins l'array de cases es pot comprobar que s'han afegit tantes cases com chaboles hi havia.
Un altre punt que no hem aconseguit ha estat el de incloure un botó que fasi que les construccions es canviin de lloc.

Ampliacions

El personatge que triam ,junt amb el nick name del jugador es guarda dins el localstorage.Desprès dins la pantalla de joc ens surt un missatge de benvinguda amb el nostro nick,el nom del personatge que hem triat,i ademès una foto d'aquest.

Totes les construccions tenen el mateix tamany (3x4),ademés no es posible que surtin del mapa ni que es solapin entre elles.
Un altre punt que hem anyadit ha estat el de el suborn per construir chalets i un event per poder construir hotels.
El del chalet consisteix en tenir 2 cases i 2 chaboles com a minim.Donat aquest punt el que podrem fer serà clicar dins la casella de chalets i ens mostrarà un missatge de que si volem pagar 100 monedes per poder comprar chalets.Si no tenim no ens deixarà,pero si tenim podem aceptar el suborn.També una vegada tenguem més de dues cases i mes de dos chalets podrem tenir accès directe a comprat hotels.Per aquest cas no tendrem que pagar cap suborn si no que directament se'ns habilitarà.

També hem incorporat so per determinats events.Cada vegada que ens apareix un intervalsorpresa apareix un renou (un poc molest,alerta xD).També per cada vegada que triam una construcció ens surt un renou i,quan la cream dins el canvas també ens surt un renou bastant significatiu.La carpeta on estàn els sons es dins /src/sound

VALORS IMPORTANTS

DINERS (inicials) : 100;
CHABOLAS COST:20    ALQUILER:5
CASES    COST:50    ALQUILER:10
CHALET   COST:200   ALQUILER:50
HOTEL    COST:500   ALQUILER:100

Construccions enabled al principi:
chabolas
cases









