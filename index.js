#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellow("Hello"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(chalk.green(words));
console.log(chalk.magentaBright(`your sentence word count is ${words.length}`));
console.log(chalk.yellow("Thankyou"));
