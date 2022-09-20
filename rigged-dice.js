const prompt = require('prompt-sync') ({sigint: true})

let rigged = Number(prompt("Which number do you want to roll between 1 through 6: "))

let roll = Math.ceil(Math.random()*7) //1-7

console.log("Actual roll: " + roll)

if(roll === 7){
    console.log(rigged)
}else {
    console.log(roll)
}

/*
we are working with a 6 sided die

rigged side: 6

1 = 1/7
2 = 1/7
3 = 1/7
4 = 1/7
5 = 1/7
6 = 2/7

roll a 7 sided die
1-6 die with 2 6s
7 is being treated as another 6


*/