// * * *
// * *
// *

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the total number of lines: ', value => {
    let n = value
    let k = n
    res=[]
    for (i=0; i<n; i++)
    {
        for (j=0; j<k; j++)
        {
            res.push('*')
        }
        console.log(res.join(" "))
        res=[]
        k = k-1
    }
    process.exit()
})
