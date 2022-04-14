const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box1');

function makeBox(_box) {
    this.mousedown = function(_event) {
        this.mouseLeft = _event.clientX;
        this.mouseTop = _event.clientY;
        if(this.style.marginLeft && this.style.marginTop) {
            this.mouseLeft -= parseInt(this.style.marginLeft, 10);
            this.mouseTop -= parseInt(this.style.marginTop, 10);
        }

        this.boxClick = true;
    }

    this.mousemove = function(_event) {
        if(_box.boxClick) {
            _box.style.marginLeft = _event.clientX -_box.mouseLeft +"px";
            _box.style.marginTop = _event.clientY -_box.mouseTop +"px";
        }
    }

    this.mouseup = function(_event) {
        _box.boxClick = false;
    }

    
    _box.addEventListener('mousedown',this.mousedown);
    document.addEventListener('mousemove',this.mousemove);
    document.addEventListener('mouseup',this.mouseup);
}

var makeBox1 = new makeBox(box1);
var makeBox2 = new makeBox(box2);