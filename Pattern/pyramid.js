//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

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
    let space = n*2 - 2
    let res = []
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<space; j++)
        {
            res.push(" ")
        }
        for(let k=0; k< i+1; k++)
        {
            res.push("* ")
        }
        console.log(res.join(""))
        res = []
        space -= 1
    }
}