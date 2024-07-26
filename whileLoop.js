function BottlesOfBeer(numbers){
    numbers = 99;
    numbers++;
    while(numbers > 0) {
         numbers--;
        if (numbers > 0) {
         console.log(numbers + " bottles of beer on the wall , " + numbers + " bottles of beer");
         }
        numbers--;
         
        
        if(numbers > 0){
         console.log("Take one down and pass it around, " + numbers + " bottes of beer in the wall");
        }           
    }
}

BottlesOfBeer();