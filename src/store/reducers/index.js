import { combineReducers } from 'redux';

import placeReducer from './places';

const rootReducer = combineReducers({
  places: placeReducer,
});

export default rootReducer;