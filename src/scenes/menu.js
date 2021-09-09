class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){
    }

    create(){
        currentMap = '/assets/maps/simpleMap.json';
        this.scene.start("mapScene");
    }
    update(){

    }
}