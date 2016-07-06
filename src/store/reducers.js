import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import selectedImage from '../reducers/simpsons-selection-reducer'
import images from '../reducers/gallery-reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    selectedImage,
    images,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
