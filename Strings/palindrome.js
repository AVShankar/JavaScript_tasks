// Write a program to check whether a string is palindrome or not

const rl = require('readline');
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the string to check for Palidrome: ', msg =>{
    palindrome(msg)
    process.exit()
})

function palindrome(msg)
{
    var len = msg.length
    var revStr = []
    for(i=len-1; i>=0; i--)
    {
        revStr.push(msg[i])
    }
    revStr = revStr.join('')
    if(revStr == msg)
        console.log('The given string is Palindrome')
    else
        console.log('Its not a Palindrome')
}