import React, { PropTypes } from 'react'
import classes from './SimpsonView.scss'

const SimpsonImg = ({ title, img, onClick }) => (
  <img
    className={classes.simpsonsImg}
    title={title}
    src={img}
    onClick={function () {
      onClick()
    }}
/>
)

SimpsonImg.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default SimpsonImg
