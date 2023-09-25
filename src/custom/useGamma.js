import jsonData from '../data/Wine-Data.json'
import mean from '../utils/mean'
import median from '../utils/median'
import mode from '../utils/mode'

// extracting the needed data
const extractRaw = () => {
  const rawObject = {}
  let rawSet = new Set()

  jsonData.forEach(item => {
    rawSet.add(item.Alcohol)
    const { Alcohol, Ash, Hue, Magnesium } = item
    if (!rawObject[Alcohol]) {
      rawObject[Alcohol] = []
    }
    const gamma = ((Ash * Hue) / Magnesium)
    rawObject[Alcohol].push(Number(gamma.toFixed(3)))
  })
  return { rawObject, rawSet }
}


const useGamma = () => {
  const { rawObject, rawSet } = extractRaw()
  const uniqueArr = [...rawSet]
  const meanObject = mean(rawObject)
  const medianObject = median(rawObject)
  const modeObject = mode(rawObject)

  let finalArr = []

  // arranging mean, median, mode into readable format
  for (let i = 0; i < uniqueArr.length; i++) {
    const obj = {}
    obj['alcohol'] = i + 1
    obj['mean'] = meanObject[i + 1]
    obj['median'] = medianObject[i + 1];
    obj['mode'] = modeObject[i + 1];
    finalArr.push(obj)
  }
  return finalArr
}

export default useGamma
