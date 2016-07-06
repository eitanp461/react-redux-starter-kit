import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './HomeView.scss'
import SimpsonView from './SimpsonView.js'
import getRandomTransformations from '../../../image-transformations'

console.log(getRandomTransformations())

export const HomeView = ({images}) => (
  <div>
    <div id='simpsons-container' className={classes.simpsonsContainer}>
      <h2 className={classes.selectCharacter}>Select your favorite character:</h2>
      {images.map((image) =>
        <SimpsonView title={image.title} img={image.url} />
      )}
    </div>
    <div className={classes.transformations}>
      <button id='feeling-lucky' className={classes.feelingLucky}>I'm Feeling Lucky</button>
      <div id='preview-selected' className={classes.previewSelected} />
    </div>
  </div>
)

HomeView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onTodoClick: (id) => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
