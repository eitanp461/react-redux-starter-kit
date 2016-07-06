import { getRandomValue } from './utils'

const modes = ['scale', 'fit', 'limit', 'mfit', 'fill', 'lfill', 'pad', 'lpad', 'crop', 'thumb']
export default function getRandomParamValue () {
    const mode = modes[getRandomValue(0, 9)]
    return `c_${mode}`
}
