const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the total number of lines: ', value => {
    diamondPattern(value)
    process.exit()
})

function diamondPattern(n)
{
    let res = []
    let space = n*2 - 2
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<space; j++)
        {
            res.push(" ")
        }
        space -= 1
        for(let k=0; k<i+1; k++)
        {
            res.push("* ")
        }
        console.log(res.join(''))
        res=[]
    }
    let rev = n-1
    let revSpace = space+2
    for(let i=0; i<n-1; i++)
    {
        for(let j=0; j<revSpace; j++)
        {
            res.push(" ")
        }
        for(let k=0; k<rev; k++)
        {
            res.push('* ')
        }
        rev--
        revSpace++
        console.log(res.join(''))
        res=[]
    }
}