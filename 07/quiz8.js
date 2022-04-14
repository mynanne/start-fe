const box = document.getElementById("box");
const min = document.getElementById("min");
const max = document.getElementById("max");
const btn = document.getElementById("btn");

//박스 크기, 테두리, 가운데정렬
box.style.width = "100px";
box.style.height = "50px";
box.style.borderStyle = "solid";
box.style.borderColor = "gray";
box.style.borderWidth = "10px 10px";
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.style.display = "flex";

var interval
var randomInt
var moveInt

function PrintTime() {
    box.textContent = moveInt;
    moveInt++;

    if(randomInt <= moveInt) {
        clearInterval(interval);
    }
}

function mouseDown(_event) {
    moveInt = min.value*1
    randomInt = Math.ceil(Math.random()*(max.value*1 - min.value*1) +min.value*1)
    interval = setInterval(PrintTime, 10);
}


btn.addEventListener('mousedown',mouseDown);