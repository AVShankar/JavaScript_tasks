// Write a program to display all array elements using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)

prompts.question('Enter the array values separated with space: ', value =>{
    // let arr = value.split(" ")
    arr = value.split(' ').map(Number)
    console.log(sum(arr))
    process.exit()
})

function sum(arr, count=0)
{
    let len = arr.length
    if(count < len)
    {
        return (arr[count] + sum(arr, count+1))
    }
    else
        return 0
}
