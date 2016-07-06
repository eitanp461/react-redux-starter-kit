import { getRandomValue } from './utils'

export default function getRandomParamValue () {
  return `o_${getRandomValue()}`
}
