// Write a program to find factorial of any number using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter a number to find Factorial: ', value => {
    console.log(fact(value))
    process.exit()
})

function fact(num)
{
    if(num > 0)
        return num * fact(num-1)
    else
        return 1
}