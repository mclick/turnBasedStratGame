class Unit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      this.indirect = false;
      this.health = 100;
      this.attack = 0;
      this.defense = 1;
      this.speed= 0;
      this.moveType = "NONE";
      this.unitType = "NONE";

    }

  
    doAttack(defender, defCO,attCO,defStar){
        attack = this.health*(this.attack + attCO.attBoost(this)+Phaser.Math.Between(0, 9));
        defense = defender.health*(defender.defense+defCO.defBoost(defender) + 5 * defStar);
        damageDealt = attack * attack/(attack+defense);
        defender.health = defender.health - damageDealt;
        if(defender.health<=0){
            return defender;
        }
        else if(!this.indirect){
            return defender.counterAttack(this, attCo, defCo);
        }
    }

    counterAttack(attacker, defCo, attCo){
        if(this.indirect){
            return;
        }
        else{
            attack = this.health*(this.attack + attCO.attBoost(this)+Phaser.Math.Between(0, 9));
            defense = attacker.health*(attacker.defense+defCO.defBoost(attacker));
            damageDealt = attack * attack/(attack+defense);
            attacker.health = attacker.health- damageDealt;
            if(attacker.health<=0){
                return attacker;
            }
        }
    }

}