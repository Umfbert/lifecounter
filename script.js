var hp = [20,20];

var oldhp=[20,20];

var hps = document.getElementsByClassName("hp")

function changehp(playerid,delta){
    oldhp = JSON.parse(JSON.stringify(hp));
    hp[playerid] = hp[playerid] + delta;
    updatetext();
}
function updatetext(){
    hps[0].innerText = hp[0];
    hps[1].innerText = hp[1];
}

function togglemenu(){
    document.querySelector(".menu").classList.toggle("active");
}

function reset(){
    oldhp = hp;
    hp=[20,20];
    updatetext();
}

function undo(){
    hp = oldhp;
    updatetext();
}

