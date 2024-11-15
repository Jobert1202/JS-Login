function Control_a(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");
    let output = document.getElementById("output");
    const code = document.getElementById("code");

    //console.log(password);

    //console.log("Password = ", password.value, "Password_control = ", password_control.value);

    if (password.value == password_control.value){
        if(!isNaN(code.value)){
            console.log("Login is true");
            output.innerHTML = ("Login is true");
        }
        else{
            output.innerHTML = ("Login is false");
        }
    }
    else{
        console.log("Login is false");
        output.innerHTML = ("Login is false");
    }
}

function Control(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");
    let output = document.getElementById("output");
    const code = document.getElementById("code");

    if (password.value == password_control.value) && (!isNaN(code.value)){
        if((nickname.value != "") && (password.value != "") && ())
        console.log("Login is true");
        output.innerHTML = ("Login is true");
    }
    else{
        console.log("Any input is empty")
        output.innerHTML("Any input is empty")
    }
    

    else{
        console.log("Login is false");
        output.innerHTML = ("Login is false");

    }
}