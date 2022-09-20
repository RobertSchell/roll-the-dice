const prompt = require('prompt-sync') ({sigint: true})

let numberOfsides = Number(prompt("How many sides does die have? "))

console.log(`Below is a random roll of a die with ${numberOfsides} sides: `)
console.log(Math.ceil(Math.random()*numberOfsides))