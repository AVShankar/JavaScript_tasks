// Write a program to print all natural numbers between 1 to n using recursion
// I/p => 5
// O/p => 5 4 3 2 1
const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question("Enter the number to find Natural numbers: ", value =>{
    naturalFunc(value)
    process.exit()
})

function naturalFunc(num)
{
    console.log(num)
    if(num == 1)
        return 1
    else
        return naturalFunc(num-1)
}