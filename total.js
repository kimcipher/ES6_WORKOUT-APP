/* 
The given program declares two classes - basic and advanced with corresponding properties. Complete the code to combine basic and advanced level exercises into one new object named total, so that the given code for final output works correctly.
*/
// A WORKOUT APP



let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};


let total = {...basic, ...advanced};

for(let ex in total) {
    console.log(total[ex])
};