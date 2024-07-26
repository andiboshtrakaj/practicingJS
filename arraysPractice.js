function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.

   var randomNames = Math.floor(Math.random() * names.length);

    return names[randomNames] + " is going to buy lunch today";
    
  
/******Don't change the code below*******/    
}
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);

