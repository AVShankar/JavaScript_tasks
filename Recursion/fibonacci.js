// Write a program to generate nth Fibonacci term using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the nth number: ', value => {
    fibo(parseInt(value))
    process.exit()
})

function fibo(n)
{
    
}