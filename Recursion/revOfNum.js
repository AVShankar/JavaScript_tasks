// Write a program to find reverse of any number using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the number to reverse: ', value =>{
    console.log(revFunc(parseInt(value)))
    process.exit()
})

function revFunc(num, rev=0)
{
    let rem
    if(num > 0)
    {
        rem = num % 10
        rev = rev * 10 + rem
        num = parseInt(num/10)
        return revFunc(num, rev)   
    }
    else
        return rev
}