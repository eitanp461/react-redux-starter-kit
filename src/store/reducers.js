import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import selectedTransformation from '../reducers/selected-transformation'
import simpsonsSelectionReducer from '../reducers/simpsons-selection-reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    selectedTransformation,
    simpsonsSelectionReducer,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
