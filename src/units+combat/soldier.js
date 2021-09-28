class Soldier extends Unit{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.indirect = false;
        this.range = 1;
        this.health = 100;
        this.attack = 35;
        this.defense = 30;
        this.speed= 5;
        this.moveType = "NONE";
        this.unitType = "NONE";
        this.cost = 100;
  
      }
}