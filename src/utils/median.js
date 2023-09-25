
// Median function

export default function median(rawObject){
    const medianObject = {}

    for(let key in rawObject){
        const arr =  rawObject[key].sort((a,b)=> a-b)
        const middle = Math.floor(arr.length/2)
        const median = Number(arr[middle])
        if(arr.length%2===0){
            medianObject[key] = Number(((arr[middle-1] + arr[middle])/2).toFixed(3))
        }else medianObject[key] = Number(median.toFixed(3))
    }

    return medianObject
}