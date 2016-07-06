import { getRandomValue } from './utils'

export default function getRandomParamValue () {
  return `h_${getRandomValue()}`
}
