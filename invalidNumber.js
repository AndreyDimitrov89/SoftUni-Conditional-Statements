function invalidNumber(arg) {
    let num = Number(arg);
    let isValid = (num >= 100 && num <= 200) || num === 0
   if (!isValid){
    console.log("Invalid")
   }
}
invalidNumber (1)