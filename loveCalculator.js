function loveCalc() {
    var myname = prompt("Write Your Name");
    var yourname = prompt("Write his or her name");
    var randomNumber = Math.random();
    randomNumber = randomNumber * 100;
    randomNumber = Math.floor(randomNumber) + 1;
    console.log(randomNumber);

    if (randomNumber >= 80 && randomNumber <= 90) {
        alert("Your Love Percentage Is: " + randomNumber + "%" + "\nYou for sure love each other, do something");
    } else if (randomNumber > 90 && randomNumber <= 94) {
        alert("Your Love Percentage Is: " + randomNumber + "%" + "\nYou are soulmates");
    } else if (randomNumber > 95) {
        alert("Your Love Percentage Is: " + randomNumber + "%" + "\nYou are 1 in a billion");
    } else if (randomNumber > 30 && randomNumber <= 60) {
        alert("Your Love Percentage Is: " + randomNumber + "%");
    } else if (randomNumber <= 30) {
        alert("Your Love Percentage Is: " + randomNumber + "%" + "\nOuch!");
    }
}

loveCalc();
