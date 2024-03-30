#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//  12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please your option",
            choices: ["withdrawal", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdrawal") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =, -=, +=
        if (myBalance >= amountAns.amount) {
            console.log(myBalance -= amountAns.amount);
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "please your option",
                choices: ["500", "1000", "50000", "10000"]
            }
        ]);
        // =, -=, +=
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
