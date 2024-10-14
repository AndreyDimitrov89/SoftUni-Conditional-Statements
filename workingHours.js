function workingHours(hour, day) {
    let isOpen;
    let dayNumber;

    switch (day) {
        case "Monday":
            dayNumber = 1;
            break;
        case "Tuesday":
            dayNumber = 2;
            break;
        case "Wednesday":
            dayNumber = 3;
            break;
        case "Thursday":
            dayNumber = 4;
            break;
        case "Friday":
            dayNumber = 5;
            break;
        case "Saturday":
            dayNumber = 6;
            break;
        case "Sunday":
            dayNumber = 0;
            break;
        default:
            dayNumber = -1;
    }

    if (dayNumber == 0 || hour < 10 || hour >= 18 || dayNumber == -1) {
        isOpen = false;
    } else {
        isOpen = true;
    }

    if (isOpen) {
        console.log("open");
    } else {
    console.log("closed");
    }
}
workingHours(1)