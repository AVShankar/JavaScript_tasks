// Write a program to find first & last occurrence of a character in a given string

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)


prompts.question('Enter the string and the letter to be located: ', msg => {
    console.log(msg)
    findOccurance(msg)
    process.exit()
})

function findOccurance(msg)
{
    var len = msg.length
    var locatorLetter = msg[len-1] 
    console.log(locatorLetter)
    for(i=0; i<len; i++)
    { 
        if(msg[i] == locatorLetter) 
        {
            console.log('First occurance of letter ' + locatorLetter + ' is: ' + i)
            break
        }
    }
    msg = Array.from(msg)
    msg.pop()
    msg = msg.join('')
    for(i = len-1; i>=0; i--)
    {
        if(msg[i] == locatorLetter) 
        {
            console.log('Last occurance of letter ' + locatorLetter + ' is: ' + i)
            break
        }
    }
}