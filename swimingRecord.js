function calculateSwimmingRecord(recordSeconds, distanceMeters, secondsPerMeter) {
    // Изчисляваме базовото време без съпротивление
    let baseTime = distanceMeters * secondsPerMeter;
    
    // Изчисляваме колко пъти ще се забави поради съпротивление
    let delays = Math.floor(distanceMeters / 15);
    
    // Добавяме времето за забавяне
    let totalTime = baseTime + (delays * 12.5);
    
    // Изчисляваме разликата спрямо рекорда
    let difference = totalTime - recordSeconds;
    
    // Форматираме времето и разликата до втория знак след десетичната запетая
    totalTime = totalTime.toFixed(2);
    difference = difference.toFixed(2);
    
    if (totalTime < recordSeconds) {
        return `Yes, he succeeded! The new world record is ${totalTime} seconds.`;
    } else {
        return `No, he failed! He was ${difference} seconds slower.`;
    }
}


console.log(calculateSwimmingRecord(10464, 1500, 20));