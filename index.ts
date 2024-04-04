#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log('Congratulations! You guessed right number');
} else {
    console.log('You guessed wrong number');
}