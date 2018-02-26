import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View} from 'react-native';

import store from './src/store/configureStore';
import Home from './src/components/Home/Home';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import placeImage from './src/assets/munich.jpg'

export default class App extends React.Component {

  render() {
    
    return (
      <Provider store={store} key={Math.random()}>
          <Home />
      </Provider>
    );
  }
};
