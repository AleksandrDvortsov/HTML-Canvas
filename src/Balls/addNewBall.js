function addNewBall(event) {
    if ( arrCirlers.length < 3 ){
        let x = event.pageX;
        let y = event.pageY;
        console.log(x + " X " + y + " Y ");
        arrCirlers.push(new Ball(x,y,dx,dy,r,0,0,0));
    }
}