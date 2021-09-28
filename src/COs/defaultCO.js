class defCO {
    constructor(){
        this.name = "None";
        this.unitList = [];
        this.propertyList = [];
        this.wealth = 0
    }

    attBoost(unit){
        return 0;
    }

    defBoost(unit){
        return 0;
    }

    addUnit(unit){
        this.unitList.push(unit);
    }

    addproperty(property){
        this.propertyList.push(property);
    }

    deleteUnit(unit){
        const index = this.unitList.indexOf(unit);
        if (index > -1) {
            this.unitList.splice(index, 1);
        }
        return index;
    }

    removeProperty(){
        const index = this.unitList.indexOf(unit);
        if (index > -1) {
            this.unitList.splice(index, 1);
        }
        return index;
    }

    beginTurn(){
        for(i=0;i<this.unitList.length;i++){
            this.unitList[i].active = true;
        }
        for(i=0;i<this.unitList.length;i++){
            this.wealth +=this.propertyList[i].collectIncome();
        }
    }
}