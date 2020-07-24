console.log('God bless this code');

let juan=new Traveler('Juan')
let henrietta=new Traveler('Henrietta')
let maude=new Traveler('Maude')
let drsmith=new Doctor('Dr. Smith')
let sara=new Hunter('Sara')

let wagon = new Wagon(4)

console.log(wagon);

console.log('First Wagon Seat Count?: ' + wagon.getAvailableSeatCount());

wagon.join(juan)
wagon.join(henrietta)
wagon.join(drsmith)
wagon.join(sara)
wagon.join(maude)

sara.hunt()
drsmith.hunt()

henrietta.eat()
sara.eat()
drsmith.eat()
juan.eat()
juan.eat()

drsmith.heal(juan)

sara.giveFood(juan, 4)

sara.eat()

console.log(sara)

wagon.shouldQuarantine()
wagon.totalFood()






    //Stretch Goals
        // Add the wagons and the travelers to the DOM.
        // Display relevent information in the DOM about the wagons and traveler – for example: travelers name/food/isHealthy, and/or Wagon's passengers/capacity.
        // Add buttons to your classes – for example: make a traveler eat, add a traveler to a wagon, check if a wagon should quarantine, etc.
        // Add a button to create a new traveler based on a name the user inputs.
        // Add animations simulating travel, etc.
        // Generally just make your game feel more like the original Oregon Trail.
    
    
    
    