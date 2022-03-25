var board = document.getElementById("board");
var boardHtml = "";

boardHtml += "<table width='200' height='200'>";
for(var i=0; i<4; i++){
    boardHtml += "<tr>";
    for(var j=0; j<4; j++){
        if((i+j)%2 ==1) {
            boardHtml += "<td bgcolor='white' ";
            boardHtml += "onmousedown='mousedown(this)' ";
            boardHtml += "onmouseup='mouseup(this,0)' ";
            boardHtml += "></td>";
        }
        else {
            boardHtml += "<td bgcolor='black' ";
            boardHtml += "onmousedown='mousedown(this)' ";
            boardHtml += "onmouseup='mouseup(this,1)' ";
            boardHtml += "></td>";
        }
    }
    boardHtml += "</tr>";
}
boardHtml += "</table>";
board.innerHTML = boardHtml;

//event ~~
function mousedown(_this) {
    _this.style.backgroundColor = "red";
}

function mouseup(_this, _num) {
    if(_num == 0) {
        _this.style.backgroundColor = "white";
    }
    else if(_num == 1) {
        _this.style.backgroundColor = "black";
    }
}
//~~ event