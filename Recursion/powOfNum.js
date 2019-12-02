// I/p => 5 2
// O/p => 25

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question("Enter a number and power value: ", msg => {
    let input = msg.split(" ")
    let base = input[0]
    let pow = input[1]
    console.log(powFunc(base, pow))
    process.exit()
})

function powFunc(num, pow)
{
    if(pow > 0)
        return num * powFunc(num, pow-1)
    else
        return 1
}
