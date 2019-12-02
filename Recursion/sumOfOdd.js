// Write a program to find sum of all odd numbers in given range using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the number to find sum of odd numbers: ', value => {
    console.log(sumOdd(parseInt(value)))
    process.exit()
})

function sumOdd(num)
{
    if(num > 0)
    {
        if(num %2 != 0)
        {
            return num + sumOdd(num-1)
        }
        else
            return sumOdd(num-1)
    }
    else
        return 0
}