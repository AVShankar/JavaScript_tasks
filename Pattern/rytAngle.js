// *
// * *
// * * *

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the number of lines: ', value => {
    print(value)
    process.exit()
})

function print(n)
{
    let k = 1
    let res = []
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<k; j++)
        {
            res.push("*")
        }
        console.log(res.join(" "))
        res = []
        k += 1
    }
}