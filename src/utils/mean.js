
// Mean function

export default function mean(rawObject){

    const meanObject = {}

    for(let key in rawObject){
        const mean = rawObject[key].reduce((a,b)=>a+b)/rawObject[key].length
        meanObject[key] = Number(mean.toFixed(3))
    }

    return  meanObject;
}