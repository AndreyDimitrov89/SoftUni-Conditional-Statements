function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let town = arg2;
    let quantity = Number(arg3);
    let result = 0;

    switch(town) {
        case "Sofia":
            switch(product) {
            case "coffe": result = quantity * 0.50; break;
            case "water": result = quantity * 0.80; break;
            case "beer": result = quantity * 1.20; break;
            case "sweets": result = quantity * 1.45; break;
            case "peanuts": result = quantity * 1.60; break;
         }
         break;
        case "Plovdiv": 
         switch(product) {
            case "coffe": result = quantity * 0.40; break;
            case "water": result = quantity * 0.70; break;
            case "beer": result = quantity * 1.15; break;
            case "sweets": result = quantity * 1.30; break;
            case "peanuts": result = quantity * 1.50; break;
         }
         break;
        case "Varna":
            switch(product) {
                case "coffe": result = quantity * 0.45; break;
                case "water": result = quantity * 0.70; break;
                case "beer": result = quantity * 1.10; break;
                case "sweets": result = quantity * 1.35; break;
                case "peanuts": result = quantity * 1.55; break;
             }
             break;
    }
    console.log(result);
}
smallShop("water", "Varna", 2)