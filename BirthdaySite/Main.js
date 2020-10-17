let backwards = false;
let jizzposition = 0;
let strokeNumber = 0;
let produced = 0;
let whiteRain = ['img/Jizz_1.png','img/Jizz_2.png','img/Jizz_3.png','img/Jizz_4.png'];
let jizzExists = false;

window.onload = function () {
    init();
}

function init(){
    let cover = document.getElementById("cover_pic");
    cover.addEventListener('click', removeCover);

    let picture = document.getElementById("picture");
    picture.addEventListener('click', play);
}

function removeCover(){
    var cover = document.getElementById('cover');
    cover.parentNode.removeChild(cover);
}

function play(){
    let picture = document.getElementById("picture");
    let src = picture.src;
    let jizz = document.getElementById("jizz");
    let spawn = document.getElementById("jizzSpawn");

    strokeNumber += 1;
    if((strokeNumber / 10) % 2 == 0 && jizzExists == false){
        let image = document.createElement("IMG");
        image.src = "img/Jizz.png";
        image.id = "jizz";
        spawn.appendChild(image);
        jizzExists = true;
        jizzposition = 0;
    }
    
    if(null != jizz){
        jizzposition = jizzposition - 1;
        console.log(jizz.style.marginTop);
        jizz.style.marginTop = jizzposition.toString() + "%"; 
        if(-65 == parseInt(jizz.style.marginTop)){
            spawn.removeChild(jizz);
            jizzExists = false;
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