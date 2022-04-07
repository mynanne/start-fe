const box = document.getElementById("box");

var boxClick = false;
var mouseLeft = 0;
var mouseTop = 0;

function boxMousedown(event) {
    mouseLeft = event.clientX;
    mouseTop = event.clientY;
    if(box.style.marginLeft && box.style.marginTop) {
        mouseLeft -= parseInt(box.style.marginLeft, 10);
        mouseTop -= parseInt(box.style.marginTop, 10);
    }

    boxClick = true;
    console.log("Mouse Down", event.clientX, parseInt(box.style.marginLeft, 10));
}
function boxMousemove(event) {
    if(boxClick) {
        box.style.marginLeft = event.clientX -mouseLeft +"px";
        box.style.marginTop = event.clientY -mouseTop +"px";
    }
}
function boxMouseup(event) {
    boxClick = false;
    console.log("Mouse Up");
}


box.addEventListener('mousedown',boxMousedown);
document.addEventListener('mousemove',boxMousemove);
document.addEventListener('mouseup',boxMouseup);