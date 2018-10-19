function paintBalls() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < arrCirlers.length; i++) {
        for ( let j = 0; j < 35; j ++ ){
            let x = arrCirlers[i].tail["x" + ( j+1 )];
            let y = arrCirlers[i].tail["y" + ( j+1 )];
            let rad = 35;
            if ( arrCirlers[i].speedX <= 1 && arrCirlers[i].speedY <= 1 ){
                ctx.fillStyle = "rgba(255,100,0,0.5)";
                ctx.beginPath();

                ctx.arc(x,y,36-j,0,Math.PI * 2, false);
                ctx.fill();
            }
            else if ( arrCirlers[i].speedX >= 2 && arrCirlers[i].speedY <= 2 ){
                ctx.fillStyle = "rgba(255,250,0,0.5)";
                ctx.beginPath();

                ctx.arc(x,y,36-j,0,Math.PI * 2, false);
                ctx.fill();
            }
            else if ( arrCirlers[i].speedX >= 3 && arrCirlers[i].speedY >= 3 ){
                ctx.fillStyle = "rgba(255,0,0,0.5)";
                ctx.beginPath();

                ctx.arc(x,y,36-j,0,Math.PI * 2, false);
                ctx.fill();
            }

            else {
                ctx.fillStyle = "white";
                // ctx.fillStyle = 'hsl(' + 0 + ', 100%, 25%)';
            }

            ctx.beginPath();
            ctx.fillStyle = colorTail;
            ctx.arc(x,y,rad-j,0,Math.PI * 2, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colorBall;
            ctx.stroke();
            ctx.fill();
        }

        ctx.beginPath();
        ctx.fillStyle = colorBall;
        ctx.arc(arrCirlers[i].x, arrCirlers[i].y, arrCirlers[i].r, 0, Math.PI * 2, false);
        ctx.fill();

        if (arrCirlers[i].x <= 5 + arrCirlers[i].r) {
            arrCirlers[i].speedX = (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) ;// + ( Math.random() * 5 );// + ( int ) ( Math.random() * 5 );
        }
        if (arrCirlers[i].y <= 5 + arrCirlers[i].r) {
            arrCirlers[i].speedY = (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) ;// + ( Math.random() * 5 );// + ( int ) ( Math.random() * 5 );
        }
        if (arrCirlers[i].x >= canvas.width - (arrCirlers[i].r)-5) {
            arrCirlers[i].speedX = -(Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) ;// + ( Math.random() * 5 );// + ( int ) ( Math.random() * 5 );
        }
        if (arrCirlers[i].y >= canvas.height - (arrCirlers[i].r)-5) {
            arrCirlers[i].speedY = -(Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) ;// + ( Math.random() * 5 );// + ( int ) ( Math.random() * 5 );
        }
        ////////////////////////////////////////////
        // ctx.fillRect(200,0,50,50);
        // ctx.fillRect(500,0,50,50);
        // ctx.fillRect(750,0,50,50);
        // ctx.fillRect(0,200,50,50);
        // ctx.fillRect(0,550,50,50);
        // ctx.fillRect(300,550,50,50);
        // ctx.fillRect(600,550,50,50);
        // ctx.fillRect(750,300,50,50);
        // ctx.fillRect(300,200,50,50);
        // ctx.fillRect(450,300,50,50);
        ////////////////////////////////////////////

        if ( arrCirlers[i].x >= 200-r && arrCirlers[i].y >= 0-r && arrCirlers[i].x <= 250+r && arrCirlers[i].y <= 50+r){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 500-r && arrCirlers[i].y >= 0-r && arrCirlers[i].x <= 550+r && arrCirlers[i].y <= 50+r){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 750-r && arrCirlers[i].y >= 0-r && arrCirlers[i].x <= 800+r && arrCirlers[i].y <= 50 ){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 0-r && arrCirlers[i].y >= 200-r && arrCirlers[i].x <= 50+r && arrCirlers[i].y <= 250){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 0 && arrCirlers[i].y >= 550 && arrCirlers[i].x <= 50+r && arrCirlers[i].y <= 600){
            arrCirlers[i].speedX = (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 300-r && arrCirlers[i].y >= 550 && arrCirlers[i].x <= 350+r && arrCirlers[i].y <= 600){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 600-r && arrCirlers[i].y >= 550 && arrCirlers[i].x <= 650+r && arrCirlers[i].y <= 600){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 750 && arrCirlers[i].y >= 300 && arrCirlers[i].x <= 800 && arrCirlers[i].y <= 350){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY = (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 300 && arrCirlers[i].y >= 200 && arrCirlers[i].x <= 350 && arrCirlers[i].y <= 250){
            arrCirlers[i].speedX = (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }
        if ( arrCirlers[i].x >= 450 && arrCirlers[i].y >= 300 && arrCirlers[i].x <= 500 && arrCirlers[i].y <= 350){
            arrCirlers[i].speedX += (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
            arrCirlers[i].speedY = (Math.floor(Math.random() * ( 3 - (-3) ) ) + 3) * 2;
        }

        moveTailBall(arrCirlers[i].tail,arrCirlers[i].speedX,arrCirlers[i].speedY);

        arrCirlers[i].x += arrCirlers[i].speedX;
        arrCirlers[i].y += arrCirlers[i].speedY;
    }
    requestAnimationFrame(paintBalls);
}
paintBalls();
