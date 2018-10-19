let canvas = document.getElementById("race");
let canvas2 = document.getElementById("finish");
let ctx = canvas.getContext('2d');
let ctxFinish = canvas2.getContext('2d');

let x1 = 7.5;
let y1 = 7.5;
let x2 = 7.5;
let y2 = 107.5;
let x3 = 7.5;
let y3 = 207.5;
let x4 = 7.5;
let y4 = 307.5;
let x5 = 7.5;
let y5 = 407.5;

let random1 = Math.floor(Math.random() * 10)+1;
let random2 = Math.floor(Math.random() * 10)+1;
let random3 = Math.floor(Math.random() * 10)+1;
let random4 = Math.floor(Math.random() * 10)+1;
let random5 = Math.floor(Math.random() * 10)+1;

let redCar;
let greenCar;
let blueCar;
let orangeCar;
let yellowCar;
let finishFon;
let startFon;

let timer;
let finish = 1035;
let vin = 0;
let woner = "";

let finish1 = false;
let finish2 = false;
let finish3 = false;
let finish4 = false;
let finish5 = false;

creatFonAndCars();

function creatFonAndCars() {

    // finish Fon
    finishFon = new Image();
    finishFon.src = "imgRace/finishFon.jpg";
    finishFon.onload = function () {
        for (let i = 1100; i <= 1200; i += 50) {
            for (let j = 0; j <= 500; j += 50) {
                ctx.drawImage(finishFon, i, j, 50, 50);
            }
        }
    }
    // start Fom
    startFon = new Image();
    startFon.src = "imgRace/start.png";
    startFon.onload = function () {
        ctx.drawImage(startFon, 0, 0, 100, 500);
    }

    // Cars
    redCar = new Image();
    redCar.src = "imgRace/carRed.jpg";
    redCar.onload = function () {
        ctx.drawImage(redCar,x1,y1,85,85);
    }
    greenCar = new Image();
    greenCar.src = "imgRace/carGreen.jpg";
    greenCar.onload = function () {
        ctx.drawImage(greenCar,x2,y2,85,85);
    }
    blueCar = new Image();
    blueCar.src = "imgRace/carBlue.jpg";
    blueCar.onload = function () {
        ctx.drawImage(blueCar,x3,y3,85,85);
    }
    orangeCar = new Image();
    orangeCar.src = "imgRace/carOrang.jpg";
    orangeCar.onload = function () {
        ctx.drawImage(orangeCar,x4,y4,85,85);
    }
    yellowCar = new Image();
    yellowCar.src = "imgRace/carYellow.jpg";
    yellowCar.onload = function () {
        ctx.drawImage(yellowCar,x5,y5,85,85);
    }

    //track
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(1100, 100);
    ctx.lineWidth = 4;
    ctx.moveTo(100, 200);
    ctx.lineTo(1100, 200);
    ctx.lineWidth = 4;

    ctx.moveTo(100, 300);
    ctx.lineTo(1100, 300);
    ctx.lineWidth = 4;
    ctx.moveTo(100, 400);
    ctx.lineTo(1100, 400);
    ctx.lineWidth = 4;

    ctx.moveTo(100,0);
    ctx.lineTo(100,500);
    ctx.lineWidth = 4;
    ctx.moveTo(1100,0);
    ctx.lineTo(1100,500);
    ctx.lineWidth = 4;

    ctx.stroke();

    // TEXT
    ctxFinish.save();
    ctxFinish.translate(110, 500);
    ctxFinish.rotate(-Math.PI / 2);

    ctxFinish.font = "80px Verdana";
// Create gradient
    var gradient = ctxFinish.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop("0", "red");
    gradient.addColorStop("0.2", "orange");
    gradient.addColorStop("0.4", "yellow");
    gradient.addColorStop("0.6", "green");
    gradient.addColorStop("0.8", "blue");
    gradient.addColorStop("1", "purple");
// Fill with gradient
    ctxFinish.fillStyle = gradient;
    ctxFinish.fillText("F I N I S H !", 0, -35);

}
function rases() {

    ctx.clearRect(100,0,1000,500);
    if ( finish1 === false || finish2 === false || finish3 === false || finish4 === false || finish5 === false ) {
        timer = setTimeout(rases,1);
        if (x1 <= finish) {
            x1 += random1;
            if (x1 >= finish) {
                if (vin === 0) {
                    vin = 1;
                    whoDidWin();
                }
                finish1 = true;
            }
        }
        if (x2 <= finish) {
            x2 += random2;
            if (x2 >= finish) {
                if (vin === 0) {
                    vin = 2;
                    whoDidWin();
                }
                finish2 = true;
            }
        }
        if (x3 <= finish) {
            x3 += random3;
            if (x3 >= finish) {
                if (vin === 0) {
                    vin = 3;
                    whoDidWin();
                }
                finish3 = true;
            }
        }
        if (x4 <= finish) {
            x4 += random4;
            if (x4 >= finish) {
                if (vin === 0) {
                    vin = 4;
                    whoDidWin();
                }
                finish4 = true;
            }
        }
        if (x5 <= finish) {
            x5 += random5;
            if (x5 >= finish) {
                if (vin === 0) {
                    vin = 5;
                    whoDidWin();
                }
                finish5 = true;
            }
        }
    }
    else{
        alert( woner );

        x1 = 7.5;
        y1 = 7.5;
        x2 = 7.5;
        y2 = 107.5;
        x3 = 7.5;
        y3 = 207.5;
        x4 = 7.5;
        y4 = 307.5;
        x5 = 7.5;
        y5 = 407.5;

        vin = 0;

        random1 = Math.floor(Math.random() * 10)+1;
        random2 = Math.floor(Math.random() * 10)+1;
        random3 = Math.floor(Math.random() * 10)+1;
        random4 = Math.floor(Math.random() * 10)+1;
        random5 = Math.floor(Math.random() * 10)+1;

        finish1 = finish2 = finish3 = finish4 = finish5 = false;
    }

    creatFonAndCars();
    ctx.drawImage(redCar,x1,y1,85,85);
    ctx.drawImage(greenCar,x2,y2,85,85);
    ctx.drawImage(blueCar,x3,y3,85,85);
    ctx.drawImage(orangeCar,x4,y4,85,85);
    ctx.drawImage(yellowCar,x5,y5,85,85);

}

function whoDidWin() {
    switch (vin){
        case 1:
            woner = "R E D - V O N # " + vin;
            return;
        case 2:
            woner = "G R E E N - V O N # " + vin;
            return;
        case 3:
            woner = "B L U E - V O N # " + vin;
            return;
        case 4:
            woner = "O R A N G E - V O N # " + vin;
            return;
        case 5:
            woner = "Y E L L O W - V O N # " + vin;
            return;
    }
}

















