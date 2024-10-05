function checkPassword(inputPassword) {
    const correctPassword = "s3cr3t!P@ssw0rd";
    
    if (inputPassword === correctPassword) {
        return "Welcome";
    } else {
        return "Wrong password!";
    }
    }
    console.log(checkPassword("s3cr3t!P@ssw0rd"));
    console.log(checkPassword("qwerty")); 