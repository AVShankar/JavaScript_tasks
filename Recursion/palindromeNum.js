// Write a program to check whether a number is palindrome or not using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the number to check for Palidrome: ', value => {
    let result = palindrome(parseInt(value))
    if(result == value)
    {
        console.log('Yes')
    }
    else
        console.log('No')
    process.exit()
})

function palindrome(num, rev = 0)
{
    let rem
    if(num > 0)
    {
        rem = num % 10
        rev = rev*10 + rem
        num = parseInt(num / 10)
        return palindrome(num, rev)
    }
    else
        return rev

}