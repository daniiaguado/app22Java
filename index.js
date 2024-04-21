addEventListener("DOMContentLoaded", main);

function main() {

words();
nul();
image();
backgorundColor();
addSize();


let botones = document.getElementsByClassName("oculta");
for (let index = 0; index < botones.length; index++) {
    botones[index].addEventListener("click", function (e) {
        disguise(e.currentTarget);
        e.stopPropagation();
    });
}

getTime();
}

function words() {
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let Palabras = parrafos[i].innerHTML.split(" ");
        let total = Palabras.length
        Palabras.push("<br><b> Total Palabras " + total + "</b> </br>")
        parrafos[i].innerHTML = Palabras.join(" ");
    }
}

function nul() {
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        let contenido = parrafos[i].innerHTML;
        if (contenido.includes("nulla")) {
            parrafos[i].innerHTML = contenido.replace(/nulla/g, '<a href="http://google.com">nulla</a>');
        }
    }
}

function image(){
    let parrafos= document.getElementsByTagName('h1');
    
    for(let i=0; i < parrafos.length;i++){
        let image = document.createElement('img');
        image.src='https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png';
        image.style.width='16px';
        image.style.marginleft='10px';

        parrafos[i].appendChild(image);

    }
} 

function backgorundColor() {
    let parrafos = document.getElementsByTagName('p');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener('click', function() {
            let color = window.getComputedStyle(this).getPropertyValue("background-color");
            this.style.backgroundColor = (color === 'rgb(144, 238, 144)') ? 'rgb(173, 216, 230)' : 'rgb(144, 238, 144)';
        });
    }
}

function addSize() {
    let parrafos = document.getElementsByTagName('p');
    let tamañoInicial = parseFloat(window.getComputedStyle(parrafos[0]).fontSize); 
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].addEventListener('click', function () {
            let tamaño = parseFloat(window.getComputedStyle(this).fontSize);
            this.style.fontSize = (tamaño + 1) + 'px';
            if (tamaño >= tamañoInicial * 2) {
                this.style.fontSize = tamañoInicial + 'px';
            }
        });
    }
}




function disguise(ele) {
let hermano = ele.nextSibling;;
while (hermano.nodeName != "DIV") {
    hermano = hermano.nextSibling;
};
hermano.style.display = (ele.innerHTML == "Mostrar") ? "block" : "none";
ele.innerHTML = (ele.innerHTML == "Mostrar") ? "Ocultar" : "Mostrar";
}


function getTime(){
    let reloj = document.createElement("div");
    reloj.innerHTML = "00:00:00";
    reloj.id = "reloj";
    reloj.setAttribute("style", "position: absolute; display: none; background-color: red; color: white; border: 1px solid black;");
    document.body.appendChild(reloj);

    let parrafos = document.getElementsByTagName("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].addEventListener("mouseenter", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.display = "block";
            let d = new Date();
            reloj.innerHTML = (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
        });

        parrafos[index].addEventListener("mousemove", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.left = (e.clientX + 5) + "px";
            reloj.style.top = (e.clientY - 5) + "px";
        });

        parrafos[index].addEventListener("mouseleave", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.display = "none";
            console.log(e.target, e.currentTarget);
        });
    }
}