import { getRandomValue } from './utils'

const directions = ['north_west', 'north', 'north_east',
'west', 'center', 'east',
'south_west', 'south', 'south_east',
'xy_center', 'face', 'face:center',
'faces', 'faces:center', 'body',
'adv_face', 'adv_faces', 'adv_eyes'
]
export default function getRandomParamValue () {
    const direction = directions[getRandomValue(0, 17)]
    return `g_${direction}`
}
