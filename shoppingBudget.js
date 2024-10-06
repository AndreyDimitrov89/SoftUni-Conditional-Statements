function calculatePurchase(budget, gpuCount, cpuCount, ramCount) {
    const gpuPrice = 250;
    const cpuPrice = gpuPrice * 0.35;
    const ramPrice = gpuPrice * 0.10;

    let totalGpuCost = gpuCount * gpuPrice;
    let totalCpuCost = cpuCount * cpuPrice;
    let totalRamCost = ramCount * ramPrice;

    let totalCost = totalGpuCost + totalCpuCost + totalRamCost;

    if (gpuCount > cpuCount) {
        totalCost *= 0.85; // 15% отстъпка
    }

    let difference = budget - totalCost;
    if (numberOfGPUs > numberOfCPUs) {
        totalCost *= 0.85; 
    }
       if (totalCost <= budget) {
        let remainingBudget = (budget - totalCost).toFixed(2); 
        console.log(`You have ${remainingBudget} leva left!`); 
    } else {
        let moneyNeeded = (totalCost - budget).toFixed(2); /
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`); 
    }
}

calculateBudget(900, 2, 1, 3);
