class Map {



    getPixPos(x,y){
        return [x*16, y*16];
    }

    getGridPos(x, y){
        return [int(x/16),int(y/16)];
    }
}