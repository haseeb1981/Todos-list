#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while(condition){
    

let  addTask = await inquirer.prompt(
    
    [
        {   name: "todos",
            type: "input",
            message: "What do you want to add in your todos?"
        },


        {   name: "addmore",
            type: "confirm",
            message: "do you want to addmore todos?",
            default: "false"
    
        }
    ]

);
todos.push(addTask.todos);
condition = addTask.addmore
console.log(todos)

}