// Write a program to find sum of all natural numbers between 1 to n using recursion

const rl = require('readline')
const prompts = rl.createInterface(
   process.stdin, process.stdout 
)
prompts.question('Enter the number: ', value => {
    console.log(sumFunc(parseInt(value)))
    process.exit()
})

function sumFunc(num)
{
    if(num > 0)
        return num + sumFunc(num-1)
    else
        return 0
}