import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View} from 'react-native';

import store from '../../store/configureStore';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PlaceList from '../../components/PlaceList/PlaceList';
import PlaceDetail from '../../components/PlaceDetail/PlaceDetail';
import * as actions from '../../store/actions';
// import placeImage from './src/assets/munich.jpg'

export class Home extends React.Component {
  
  placeSubmitHandler = (place) => {
    this.props.onAddPlace(place);
    console.log('Place Added!')
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }
  
  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };



  render() {
    
    return (
        <View style={styles.container}>
          <PlaceDetail 
            selectedPlace={this.props.selectedPlace}
            onDeletePlace={this.placeDeletedHandler}
            onModalClose={this.modalClosedHandler}/>
          <PlaceInput 
            // placeName={this.props.placeName}
            // changePlaceName={this.placeNameChangeHandler}
            addPlaceName={this.placeSubmitHandler}/>
          <PlaceList 
            places={this.props.places}
            onItemSelected={this.placeSelectedHandler}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace,
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: (name) => dispatch(actions.addPlace(name)),
  onDeletePlace: () => dispatch(actions.deletePlace()),
  onSelectPlace: (key) => dispatch(actions.selectPlace(key)),
  onDeselectPlace: () => dispatch(actions.deselectPlace()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)