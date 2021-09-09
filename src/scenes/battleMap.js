class BattleMap extends Phaser.Scene {
    constructor(){
        super("mapScene");
    }

    preload(){
        this.load.image('tiles', '/assets/maps/TileSet.png');
        this.load.image('knight', '/assets/knight.png');
        this.load.tilemapTiledJSON('map', currentMap);
        this.load.image('marker', '/assets/marker.png');
    }

    create(){

        const map = this.make.tilemap({ key: 'map' });

        const tileset = map.addTilesetImage("TileSet", 'tiles');
        const water = map.createStaticLayer('water', tileset, 0, 0);
        const ground = map.createStaticLayer('ground', tileset, 0, 0);
        const terrain = map.createStaticLayer('Terrain', tileset, 0, 0);
    
        this.marker =this.add.sprite(0,0,'marker').setOrigin(0, 0);

        this.tilex=0;
        this.tiley=0;

        this.unit1 = new Unit(this, 0,0, 'knight').setOrigin(0, 0);
    
    }
    update(){
        this.tilex = Math.trunc(this.input.activePointer.worldX/16);
        this.tiley = Math.trunc(this.input.activePointer.worldY/16);

        this.marker.x = this.tilex * 16;
        this.marker.y = this.tiley * 16;

        //if (this.marker.x)
    
    }
}