const result = document.getElementById("result");
const num = document.getElementById("num");
const btn = document.getElementById("btn");

var cre = {};
for(var i=1; i<10; i++) {
    cre[i] = document.createElement('div');
}


function btnClick(_event) {
    var numType = num.value * 1;
    if(!numType) {
        alert("숫자를 입력해주세요.");
        return
    }
    for(var i=1; i<10; i++) {
        var multi = i*num.value;
        cre[i].innerText = num.value+" x "+i+" = "+ multi;
        result.appendChild(cre[i]);
    }
}

btn.addEventListener('mousedown',btnClick);