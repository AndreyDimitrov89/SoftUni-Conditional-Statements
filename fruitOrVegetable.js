function fruitOrVegetable(arg) {
    let type = arg;
    switch(type) {
        case "banana":
        case "apple":
        case "kiwi":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber": 
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown");
    } 
}
fruitOrVegetable("kiwi")