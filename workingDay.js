function weekendOrWorkingDay(day) {
    switch(day) {
        case "Monday": 
        case "Tuesday": 
        case "Wednesday":
        case "Thursady":
        case "Friday": 
        console.log("Working day"); 
        break;
        case "Saturday": 
        case "Sunday": 
        console.log("Weekend"); 
        break;
        default: 
        console.log("Error");
        break;

    }
}