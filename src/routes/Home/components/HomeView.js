import React from 'react'
import classes from './HomeView.scss'
import SimpsonView from './SimpsonView.js'
import getRandomTransformations from '../../../image-transformations'

console.log(getRandomTransformations())

export const HomeView = () => (
  <div>
    <div id='simpsons-container' className={classes.simpsonsContainer}>
      <h2 className={classes.selectCharacter}>Select your favorite character:</h2>
      <SimpsonView
        title='Homer'
        img='http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147340/simpsons/homer_simpson.png' />
      <SimpsonView
        title='Marge'
        img='http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147431/simpsons/marge_simpson.png' />
      <SimpsonView
        title='Bart'
        img='http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147398/simpsons/bart_simpson.jpg' />
      <SimpsonView
        title='Lisa'
        img='http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467147461/simpsons/lisa_simpson.png' />
      <SimpsonView
        title='Maggie'
        img='http://res.cloudinary.com/dp8chgkxw/image/upload/c_scale,h_150/v1467148220/simpsons/maggie_simpson.jpg' />
    </div>
    <div className={classes.transformations}>
      <button id='feeling-lucky' className={classes.feelingLucky}>I'm Feeling Lucky</button>
      <div id='preview-selected' className={classes.previewSelected} />
    </div>
  </div>
)

export default HomeView
