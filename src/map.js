class Map {

    

    getPixPos(x,y){
        return [x*16, y*16];
    }

    getGridPos(x, y){
        return [Math.Trunc(x/16),Math.Trunc(y/16)];
    }
}