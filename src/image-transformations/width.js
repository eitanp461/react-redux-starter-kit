import { getRandomValue } from './utils'

export default function getRandomParamValue () {
  return `w_${getRandomValue()}`
}
