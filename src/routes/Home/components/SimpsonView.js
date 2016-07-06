import React, { PropTypes } from 'react'
import classes from './SimpsonView.scss'

const SimpsonImg = ({ title, img }) => (
  <img
    className={classes.simpsonsImg}
    title={title}
    src={img}
/>
)

SimpsonImg.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default SimpsonImg
