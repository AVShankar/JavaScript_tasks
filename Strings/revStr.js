// Write a program to find reverse of a string

const rl = require('readline');
const prompts = rl.createInterface(
    process.stdin, process.stdout)
prompts.question('Enter the string: ', msg => {
console.log(msg);
reverseFunc(msg)
process.exit()
})

function reverseFunc(msg)
{
    var len = msg.length
    var revStr = []
    for(i=len-1; i>=0; i--)
    {
        revStr.push(msg[i])
    }
    revStr = revStr.join('')
    console.log(revStr)
}