// variable para scrollear el panel hacia abajo automáticamente
const scroll = document.querySelector(".panel");

// Botones habilitados del control snes
const keyNames = {
 38: "↑",
 40: "↓",
 37: "←",
 39: "→",
 65: "A",
 66: "B",
 88: "X",
 89: "Y",
}

// detector de la posición
let step = -1;

// array donde se guardan las teclas y array con el código konami
let pressed = [];
const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

window.addEventListener('keyup', konamiCode);

// KonamiCode
function konamiCode(e) {

step++;

if(!e.keyCode) {
    pressed.push(e);
    logControllerKey(e);
} else {
    pressed.push(e.keyCode);
}
  if(pressed[step] === secretCode[step]) {
    if(step === secretCode.length - 1) {
        document.body.append( new DOMParser().parseFromString( '<iframe id="completo" src="https://www.youtube.com/embed/wOL3XQcAgsA?autoplay=1" frameborder="0" allowfullscreen autoplay; style="position:fixed; top: 0; left: 0; height: 100%; width: 100%;"></iframe>', 'text/html' ).body.firstChild);
    }
} else {
    step = -1;
    pressed = [];
} 
logKey(e);

};


function controllerKey(key) {
konamiCode(key);
}

function logKey(e) {
const ul = document.getElementById("registro");
let li = document.createElement("li");
if(pressed.length > 0) {
    li.className = 'correcto';
}
if (keyNames[e.keyCode] === undefined) {
//
} else {
li.appendChild(document.createTextNode(`> ${keyNames[e.keyCode]}`));
};

ul.appendChild(li);
scroll.scrollTop = scroll.scrollHeight;
}

function logControllerKey(e) {
const ul = document.getElementById("registro");
let li = document.createElement("li");
if(pressed[step] === secretCode[step]) {
    li.className = 'correcto';
}
if (keyNames[e] === undefined) {
//
} else {
li.appendChild(document.createTextNode(`> ${keyNames[e]}`));
};

ul.appendChild(li);
scroll.scrollTop = scroll.scrollHeight;
}