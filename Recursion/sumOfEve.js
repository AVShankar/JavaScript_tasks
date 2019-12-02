// Write a program to print all even or odd numbers in given range using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the range to find even numbers: ', value =>{
    let input = value.split(" ")
    let start = input[0]
    let end = input[1]
    evenFunc(start, end)
    process.exit()
})

function evenFunc(num)
{
    if(num >= 0)
    {
        if (num % 2 == 0)
        {   
            console.log(num)
            return evenFunc(num-1)
        }
        else
            return evenFunc(num-1)
    }
    else
        return 0
}