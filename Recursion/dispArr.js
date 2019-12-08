// Write a program to display all array elements using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Press \'Enter\' to display array elements using recursion: ', _ =>{
    disp()
    process.exit()
})

function disp(count=0)
{
    let arr = [1, 2, 3, 4, 5]
    let len = arr.length
    if(count < len)
    {
        console.log(arr[count])
        return disp(count+1)
    }
    else
        return 0
}
