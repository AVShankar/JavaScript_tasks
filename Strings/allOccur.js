// Write a program to search all occurrences of a character and count of it in given string

const rl =  require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the string and the letter needs to be located: ', msg =>{
    allOccur(msg)
    process.exit()
})

function allOccur(msg)
{
    var locator = msg[msg.length-1]
    msg = msg.split(' ')
    msg.pop()
    msg = msg.toString()
    var len = msg.length
    var count = 0
    console.log(msg)
    console.log(len)
    console.log('All occurances of ' + locator + ' based on index is: ')
    for(i=0; i<len; i++)
    {
        if(msg[i] == locator)
        {
            console.log(i)
            count++
        }
    }
    console.log('Number of repitition: ', count)
}