const bug = document.getElementById("bug");
const box1 = document.querySelector('.box');

const score = document.getElementById("point");
const life = document.getElementById("life");


function bugClick(_event) {
    if(life.innerText !== "0") {
        bug.style.left = Math.random()*380 + "px";
        bug.style.top = Math.random()*380 + "px";


        score.innerText = score.innerText*1 +1;
        life.innerText = life.innerText*1 +1;
    }
}

function boxClick(_event) {
    switch (life.innerText) {
        case "1":
            alert("gameover");
            life.innerText = life.innerText -1;
            break;

        case "0":
            break;

        default:
            life.innerText = life.innerText -1;
            break;
    }
}


bug.addEventListener('mousedown',bugClick);
box1.addEventListener('mousedown',boxClick);