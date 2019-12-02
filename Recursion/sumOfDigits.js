// Write a program to find sum of digits of a given number using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question("Enter the number: ", value => {
    if(value < 9)
        console.log(value)
    else
        console.log(sumOfDigits(parseInt(value)))
    process.exit()
})

function sumOfDigits(num, result = 0)
{
    if(num > 0)
    {
        rem = num % 10
        result = result + rem
        return sumOfDigits(parseInt(num/10), result)
    }
    else
        return result
}