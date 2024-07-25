function loveCalc(){
    var myname = prompt("Write Your Name") 
    var yourname = prompt("Write his or her's name")
    var randomNumber = Math.random();
    randomNumber = randomNumber * 100 
    randomNumber = Math.floor(randomNumber) + 1
    console.log(randomNumber);

    if (randomNumber > 70) {
    alert("Your Love Percentage Is: " + randomNumber + "%" + "\nYou for sure love each other, do something");
} else {
    alert("Your Love Percentage Is: " + randomNumber + "%");
}

    
}

loveCalc();