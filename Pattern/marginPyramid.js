// *
// * *
// * * *
// * *
// *

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the number of lines: ', value => {
    printFunc(value)
    process.exit()
})

function printFunc(n)
{
    let res = []
    let space = 1
    let revSpace = n-1
    for (let i=0; i<n; i++)
    {
        for(let j=0; j<space; j++)
        {
            res.push('* ')
        }
        console.log(res.join(''))
        res = []
        space += 1
    }
    for (let i=0; i < n-1; i++)
    {
        for (let j=0; j < revSpace; j++)
        {
            res.push('* ')
        }
        console.log(res.join(''))
        res = []
        revSpace -= 1
    }
}