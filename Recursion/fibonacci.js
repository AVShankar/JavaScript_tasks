// Write a program to generate nth Fibonacci term using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the nth number: ', value => {
    let res=[]
    for(let i=0; i<value; i++)
    {
        res.push(fibo(i))
    }
    console.log(res.join(' '))
    process.exit()
})

function fibo(n)
{
    if(n==0)
    {
        return 0
    }
    else if(n==1)
    {
        return 1
    }
    else
    {
        return (fibo(n-1) + fibo(n-2))
    }
}
