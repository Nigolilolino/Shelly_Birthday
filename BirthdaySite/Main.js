let backwards = false;
let jizzposition = 0;
let strokeNumber = 0;
let produced = 0;
let whiteRain = ['img/Jizz_1.png','img/Jizz_2.png','img/Jizz_3.png','img/Jizz_4.png'];

window.onload = function () {
    init();
}

function init(){
    let picture = document.getElementById("picture");
    let button = document.getElementById('clicker');
    button.addEventListener('click', play);
}

function play(){
    let picture = document.getElementById("picture");
    let src = picture.src;
    let jizz = document.getElementById("jizz");
    let spawn = document.getElementById("jizzSpawn");

    strokeNumber += 1;

    if((strokeNumber / 10) % 2 == 0){
        let image = document.createElement("IMG");
        image.src = "img/Jizz.png";
        image.id = "jizz";
        spawn.appendChild(image);
        jizzposition = 0;
    }
    
    if(null != jizz){
        jizzposition = jizzposition - 1;
        jizz.style.marginTop = jizzposition.toString() + "%"; 
        if(-15 == parseInt(jizz.style.marginTop)){
            spawn.removeChild(jizz);
            produced += 1;
        }
    }

    if(2 === produced){
        produceWhiteShower();
    }
  
    if(src.includes("Penis1")){
        picture.src = "img/Penis2test.png";
        backwards = false;
        return;
    } else if (src.includes("Penis2") && backwards == true){
        picture.src = "img/Penis1.png";
        return;
    }else if(src.includes("Penis2") && backwards == false){
        picture.src = "img/Penis3test.png";
        return;
    }else if (src.includes("Penis3")){
        picture.src = "img/Penis2test.png";
        backwards = true;
        return;
    }

}

function produceWhiteShower(){
    let rainDrops = [];
    for(let i = 0; i < 5; i++){
        let rain = document.createElement("IMG");
        let rainSource = whiteRain[Math.floor(Math.random() * whiteRain.length)];
        rain.src = rainSource;
        rain.id = "jizz" + i;
        rainDrops.push(rain);
    }
}