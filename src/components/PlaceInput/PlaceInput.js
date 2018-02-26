import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value,
    })
  }

  handleOnPressAdd = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.props.addPlaceName(this.state.placeName);
  }

  render(){
    return(
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder='Enter your awesome place'
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}/>
        <Button 
          style={styles.placeButton}
          title='Add'
          onPress={this.handleOnPressAdd}/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
    height: 50,
  },
  placeButton: {
    width: '30%',
  },
});