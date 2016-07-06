import crop from './crop'
import gravity from './gravity'
import height from './height'
import opacity from './opacity'
import width from './width'
import { getRandomValue } from './utils'

let transformations = [crop, gravity, height, opacity, width]
const numTransformations = transformations.length

export default function getRandomTransformations () {
    const transformationsToPerform = getRandomValue(0, numTransformations)
    let transformationStr = ''

    for (let i = 0; i < transformationsToPerform; i++) {
        const transformFunctionIndex = getRandomValue(0, numTransformations - i - 1)
        const appendToEnd = ((i + 1) === transformationsToPerform) ? '' : ','
        const usedTransformation = transformations[transformFunctionIndex]
        transformationStr += usedTransformation() + appendToEnd
        // Move used transformation to the end of the array
        let reducedArr = transformations.splice(transformFunctionIndex, 1)
        transformations.concat(reducedArr)
    }

    return transformationStr
}
