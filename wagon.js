class Wagon{

    constructor(capacity){
    this.capacity=capacity
    this.passengers=[]
     }

    getAvailableSeatCount(){
   return this.capacity-this.passengers.length;
    };

    join(traveler){
        if(this.getAvailableSeatCount()>0){
         this.passengers.push(traveler)
   console.log(traveler.name + ' Has Joined the Wagon')
        }else{
       console.log('There is no more room on wagon for ' + traveler.name)
     }
     return
    };

    shouldQuarantine(){ 
const healthCheck=this.passengers.some(person=>person.isHealthy===false)

    if (healthCheck===true){
    console.log('Passenger is unhealthy. Please Quarantine')
    }else{
    console.log( 'Everyone is healthy') 
    }
    return healthCheck
    };

    totalFood(){ 
        let foodTotals=0;
    
    for(let index=0; index<this.passengers.length; index+=1){
        foodTotals +=(this.passengers[index].food)
   }
    console.log('Total Food on Wagon ' + foodTotals )
return foodTotals
    }

};

