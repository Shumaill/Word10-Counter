#! /usr/bin/env node

//import the 'inquirer'module, which is a command line interface for Node.js
import inquirer from 'inquirer'
//Declare a constant 'answers'and assign it to the result of inquirer .prompt function
const answers:{
    Sentence: string 
} = await inquirer.prompt([
    {
        name: "Sentence",
        type:"input",
        message:"Eneter yor sentence to count the word: "
    }
])
const words= answers.Sentence.trim().split(" ")

//print the array of words to the console

console.log(words)

//print th eword count of the sentence to the co

console.log(`Your Sentence word count is ${words.length}`)



