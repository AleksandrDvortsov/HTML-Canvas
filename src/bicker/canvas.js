let canvas = document.getElementById("c1");
let ctx = canvas.getContext('2d');

// background variables
let imageFon;
let firstBicker;
let secondBicker;
creatFonAndBicker();

// variables for cyclists
let v1;
let v2;
let t;
let allDistans;
let allDistansPrint;
let fistStop;
let secondStop;

// variables for animation
let x1 = 0;
let y1 = 7;
let x2 = 1085;
let y2 = 7;
let timer;

function creatFonAndBicker() {
    imageFon = new Image();
    imageFon.src = "img/fon.png";
    imageFon.onload = function () {
        for ( let i = 0; i <= canvas.width; i += 200 ){
            ctx.drawImage(imageFon,i,0,200,100);
        }
    };

    firstBicker = new Image();
    firstBicker.src = "img/bis1.png";
    firstBicker.onload = function () {
        ctx.drawImage(firstBicker,x1,y1,85,85);
    };
    secondBicker = new Image();
    secondBicker.src = "img/bis2.png";
    secondBicker.onload = function () {
        ctx.drawImage(secondBicker,x2,y2,85,85);
    };
}

function initializingVariables() {
     v1 = parseInt(document.getElementById("speedFist").value);
     v2 = parseInt(document.getElementById("speedSecondt").value);
     t = parseInt(document.getElementById("time").value);
     allDistansPrint = v1 + v2;
    if ( document.getElementById("speedFist").value === 0 || document.getElementById("speedSecondt").value === 0 || document.getElementById("time").value === 0 ){
        alert("Enter all values!!!");
    }else{
        chrackSpeedFalidate();
    }
}

function chrackSpeedFalidate() {
    if ( v2/v1 > 10 ) {
        if (v1 == 1) {
            v1 = 5;
        }
        while (v2 / v1 > 10) {
            v2 = v2 / v1;
        }
    }
    if (v1 / v2 > 10) {
        if (v2 == 1) {
            v2 = 5;
        }

        while (v1 / v2 > 10) {
            v1 = v1 / v2;
        }
    }
    drawBicker();
}

function drawBicker() {

    ctx.clearRect(0,0,1170,200);
    allDistans = v1+v2;
    fistStop = (v1 / allDistans) * 100;
    secondStop = (v2 / allDistans) * 100;

    if(x1 <= fistStop * 10 ){
        x1 += fistStop/10;
        x2 -= secondStop/10;
        timer = setTimeout(drawBicker,10*t);
    }
    else{
        alert("Total distanse - " + allDistansPrint + " km.");
        x1 = 0;
        x2 = 1085;
        y1 = 7;
        y2 = 7;
    }
    for ( let i = 0; i < canvas.width; i += 200 ){
        ctx.drawImage(imageFon,i,0,200,100);
    }
    ctx.drawImage(firstBicker,x1,y1,85,85);
    ctx.drawImage(secondBicker,x2,y2,85,85);
}