function calculateMovieBudget(budget, extraCount, costumePrice) {
   
  let decorCost = budget * 0.1;
    
 
    let costumeCost = extraCount * costumePrice;
    

    if (extraCount > 150) {
      costumeCost *= 0.9; 
    }
    

   let totalCost = decorCost + costumeCost;
    
 
    if (totalCost > budget) {
      const neededMoney = (totalCost - budget).toFixed(2);
      console.log("Not enough money!");
      console.log(`Wingard needs ${neededMoney} leva more.`);
    } else {
      let remainingMoney = (budget - totalCost).toFixed(2);
      console.log("Action!");
      console.log(`Wingard starts filming with ${remainingMoney} leva left.`);
    }
  }
  calculateMovieBudget(20000, 120, 55.5);