const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box1');

function boxMousedown(_event) {
    this.mouseLeft = _event.clientX;
    this.mouseTop = _event.clientY;
    if(this.style.marginLeft && this.style.marginTop) {
        this.mouseLeft -= parseInt(this.style.marginLeft, 10);
        this.mouseTop -= parseInt(this.style.marginTop, 10);
    }

    this.boxClick = true;
}

function boxMousemove(_box) {
    return function(_event) { 
        if(_box.boxClick) {
            _box.style.marginLeft = _event.clientX -_box.mouseLeft +"px";
            _box.style.marginTop = _event.clientY -_box.mouseTop +"px";
        }
    }
}

function boxMouseup(_box) {
    return function(_event) {
        _box.boxClick = false;
    }
}


box1.addEventListener('mousedown',boxMousedown);
document.addEventListener('mousemove',boxMousemove(box1));
document.addEventListener('mouseup',boxMouseup(box1));

box2.addEventListener('mousedown',boxMousedown);
document.addEventListener('mousemove',boxMousemove(box2));
document.addEventListener('mouseup',boxMouseup(box2));