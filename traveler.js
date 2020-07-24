class Traveler{

    constructor(name){
    this.name=name;
    this.isHealthy=true;
    this.food=1;
    }
    
    hunt(){
        this.food+=2;
    console.log('Food Amount: ' + this.food)
    return
    }

    eat(){
    if (this.food<=0){
    this.isHealthy=false;
    console.log('You need to Eat:' + this.isHealthy);
     }else if(this.food>0){
        this.isHealthy=true;
          this.food-=1;
          console.log('Ate a Filling Meal:' + this.isHealthy);
        }
        return
        }    
    };

class Doctor extends Traveler{
  constructor(name){
    super(name)
  }
  heal(traveler){
return traveler.isHealthy=true
  }
};

class Hunter extends Traveler{
constructor(name,food=2){
  super(name)
  this.food=food
}
hunt(){
  this.food+=5;
  console.log('Food Amount: ' + this.food)
  return
}

eat(){
  if (this.food<=0){
  this.isHealthy=false;
  console.log('You need to Eat:' + this.isHealthy);
   }else if(this.food>0){
      this.isHealthy=true;
        this.food -=2 || 1;
        console.log('Hunter ate a Filling Meal:' + this.isHealthy);
      }
      return
      } 

      giveFood(traveler, numOfFoodUnits){
        if(numOfFoodUnits<=this.food){
        this.food-=numOfFoodUnits
        traveler.food+=numOfFoodUnits
        }else{
          console.log('There is no more food!')
        }
        return 
      }
};


   