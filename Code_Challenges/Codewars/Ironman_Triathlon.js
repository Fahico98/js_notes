
function iTri(s){
   var totalDistance = 140.6;
   if(s == 0){
      return("Starting Line... Good Luck!");
   }else if(s > 0 && s <= 2.4){
      return({"Swim": (totalDistance - s).toFixed(2) + " to go!"});
   }else if(s > 2.4 && s <= 114.4){
      return({"Bike": (totalDistance - s).toFixed(2) + " to go!"});
   }else if(s > 114.4 && s <= 130.6){
      return({"Run": (totalDistance - s).toFixed(2) + " to go!"});
   }else if(s > 130.6 && s < totalDistance){
      return({"Run": "Nearly there!"});
   }else if(s >= totalDistance){
      return("You\'re done! Stop running!");
   }
}
