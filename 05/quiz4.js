const box = document.getElementById("box");

var boxClick = false;
var mouseLeft = 0;
var mouseTop = 0;

function boxMousedown(event) {
    mouseLeft = event.clientX;
    mouseTop = event.clientY;
    if(box.style.left && box.style.top) {
        mouseLeft -= parseInt(box.style.left, 10);
        mouseTop -= parseInt(box.style.top, 10);
    }

    boxClick = true;
}

function boxMousemove(event) {
    if(boxClick) {
        box.style.left = event.clientX -mouseLeft +"px";
        box.style.top = event.clientY -mouseTop +"px";
    }
}

function boxMouseup(event) {
    boxClick = false;
}


box.addEventListener('mousedown',boxMousedown);
document.addEventListener('mousemove',boxMousemove);
document.addEventListener('mouseup',boxMouseup);