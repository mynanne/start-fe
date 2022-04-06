var text = document.querySelector('.txt');
var btnText = document.querySelector('.text-btn');
var addRed = document.querySelector('.add-red');
var btnAdd = document.querySelector('.add-btn');
var btnDel = document.querySelector('.delete-btn');
var btnReset = document.querySelector('.reset-btn');
var btnToggle = document.querySelector('.toggle-btn');
var btnImage = document.querySelector('.image-btn');
var box = document.querySelector('.box');

function Ered(event) {
    box.classList.add('red');
}
addRed.addEventListener('click', Ered);

function Eadd(event) {
    var cre = document.createElement('div');
    var getClass = box.className;
    cre.className = getClass;
    document.body.appendChild(cre);
}
btnAdd.addEventListener('click', Eadd);

function Edel(event) {
    var allBox = document.querySelectorAll('.box');
    allBox[allBox.length - 1].remove();
}
btnDel.addEventListener('click', Edel);

function Eclick(event) {
    var box = document.querySelectorAll('.box');
    for (var i=0; i< box.length; i++) {
        box[i].innerText = text.value;
    }
}
btnText.addEventListener('click', Eclick);

function Ereset(event) {
    var allBox = document.querySelectorAll('.box');
    for(var i=0; i < allBox.length; i++) {
        allBox[i].remove();
    }
}
btnReset.addEventListener('click', Ereset);

function Etoggle(event) {
    var boxAll = document.querySelectorAll('.box');
    var getDisplay = boxAll[0].style.display;
    var setDisplay = "";
    if (getDisplay === "") setDisplay = "none";

    for(var i=0; i < boxAll.length; i++) {
        boxAll[i].style.display = setDisplay;
    }
}
btnToggle.addEventListener('click', Etoggle);

function Eimage(event) {
    var boxAll = document.querySelectorAll('.box');

    var img = document.createElement("img");
    img.src = "https://i.imgur.com/69NjYBH.png";

    boxAll[0].appendChild(img);
}
btnImage.addEventListener('click',Eimage);