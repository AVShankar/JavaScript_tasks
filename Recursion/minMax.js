// Write a program to find maximum and minimum elements in array using recursion

const rl = require('readline')
const prompts = rl.createInterface(
    process.stdin, process.stdout
)
prompts.question('Enter the array values: ', value =>{
    let arr = value.split(' ').map(Number)
    if(arr.length <= 1)
    {
        console.log('Array is too short')
    }
    else
    {
        sortFunc(arr, arr[0], arr[1])
    }
    process.exit()
})

function sortFunc(arr, min, max, count=0)
{
    let len = arr.length
    if(count < len)
    {
        if(min > arr[count])
        {
            min = arr[count]
        }
        if(max < arr[count])
        {
            max = arr[count]
        }
        return sortFunc(arr, min, max, count+1)
    }
    else
    {
        console.log('Min: ', min, 'Max: ', max)
    }
}
