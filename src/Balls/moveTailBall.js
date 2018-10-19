function moveTailBall(tail,x,y) {

    for ( let i = 35; i > 1; i-- ){
        tail["x"+i] = tail["x" +(i-1)];
        tail["y"+i] = tail["y" +(i-1)];
    }
    tail["x1"] = tail["x1"]+x;
    tail["y1"] = tail["y1"]+y;
}