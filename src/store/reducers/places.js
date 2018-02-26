import * as types from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_PLACE:
      return Object.assign({}, state, {
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          img: {
            uri: 'https://i.pinimg.com/originals/e0/64/d2/e064d257dfe097a0bb2bfca63ca08b32.jpg'
          }
        })
      })
    case types.DELETE_PLACE:
    // Alternative way to manipulate DOM w/ immutability:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    case types.SELECT_PLACE:
      return Object.assign({}, state, {
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      })
    case types.DESELECT_PLACE:
      return Object.assign({}, state, {
        selectedPlace: null
      })
    default:
      return state;
  }
};

export default reducer;