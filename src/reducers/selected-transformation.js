import randomTransform from '../image-transformations'

export default function selectedTransformationRedcuer (state = '', action) {
  switch (action.type) {
    case 'FEELING_LUCKY':
      return randomTransform()
    default:
      return state
  }
};
