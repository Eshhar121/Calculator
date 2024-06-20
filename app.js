// console.log(document.getElementById("username"));
// console.log(document.getElementById("password"));
// console.log(document.getElementById("age"));
// console.log(document.getElementById("login"));

// document.getElementById("login").addEventListener("click", loginOnAction)

// function loginOnAction(){
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let age = document.getElementById("age").value;

//     if(age>18){
//         console.log("you are eligible!");
//         alert("you are eligible!");
//     }else{
//         console.log("you are not eligible!");
//         alert("you are not eligible!");
//     }

//     switch(age){
//         case 18: alert("your age is 18");
//         break;
//         case 19: alert("your age is 19");
//         break;
//     }
//     console.log(username);
//     console.log(password);
//     console.log(age);
// }

// let numbers = [10,20,30,40,50,60];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// numbers.push(100);

// console.log(numbers);

//document.getElementById("cacl").addEventListener("click", clickOnAction)

function clickOnAction() {
    let num1 =new Number(document.getElementById("num1").value);
    let num2 =new Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let output = document.getElementById("output");

    let num3;

    switch (operator) {
        case "+":
            num3 = num1 + num2;
            break;

        case "-":
            num3 = num1 - num2;
            break;

        case "*":
            num3 = num1 * num2;
            break;

        case "/":
            num3 = num1 / num2;
            break;
    
        default:
            alert("no operation found !");
            break;
    }

    output.innerHTML=num3;

}