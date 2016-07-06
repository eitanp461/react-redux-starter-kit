import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './HomeView.scss'
import SimpsonView from './SimpsonView.js'
import getRandomTransformations from '../../../image-transformations'

console.log(getRandomTransformations())

const getSelectedImageTitle = (images) => {
  return images.reduce((title, currentImage) => {
    if (currentImage.isSelected) {
      return currentImage.title
    }
    return title
  }, '')
}

const getSelectedImageUrl = (images) => {
  return images.reduce((url, currentImage) => {
    if (currentImage.isSelected) {
      return currentImage.url
    }
    return url
  }, '')
}

export const HomeView = ({images, onImageSelection}) => (
  <div>
    <div id='simpsons-container' className={classes.simpsonsContainer}>
      <h2 className={classes.selectCharacter}>Select your favorite character:</h2>
      {images.map((image, index) =>
        <SimpsonView
        key={image.url}
        title={image.title}
        img={image.url}
        onClick={() => onImageSelection(index)}
       />
      )}
    </div>
    <div className={classes.transformations}>
      <button id='feeling-lucky' className={classes.feelingLucky}>I'm Feeling Lucky</button>
      <div id='preview-selected' className={classes.previewSelected}>
        <SimpsonView
        title={getSelectedImageTitle(images)}
        img={getSelectedImageUrl(images)}
        />
      </div>
    </div>
  </div>
)

HomeView.propTypes = {
  images: PropTypes.array.isRequired,
  onImageSelection: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onImageSelection: (imageIndex) =>
      dispatch({
        type: 'SELECT_IMAGE',
        payload: imageIndex
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
