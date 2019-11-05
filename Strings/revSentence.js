// Write a program to reverse order of words in a given string

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter a sentence to reverse: ', msg => {
    revSentence(msg)
    process.exit()
})

function revSentence(msg)
{
    splitSentence = msg.split(" ")
    var len = splitSentence.length
    var revSentence = []
    for(i=len-1; i >= 0; i--)
    {
        revSentence.push(splitSentence[i])
    }
    var revarrLen = revSentence.length
    var str=''
    for(i=0; i < len; i++)
    {
        str +=' ' + revSentence[i]
    }
    console.log(str.trim())
}