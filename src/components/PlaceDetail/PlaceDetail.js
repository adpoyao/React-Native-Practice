import React from 'react';
import { Modal, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';

const PlaceDetail = props => {
  let modalContent = null;

  if(props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.img} style={styles.modalImage}/>
        <Text style={styles.modalPlaceName}>{props.selectedPlace.name} </Text>
      </View>
    )
  }

  return (
    <Modal 
      onRequestClose={props.onModalClose} 
      visible={props.selectedPlace !== null} 
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
        <Button
          backgroundColor='white'
          color= 'red'
          icon={{name: 'delete-sweep', color: 'red'}}
          title='Delete'
          onPress={props.onDeletePlace} />
        <Button
          backgroundColor='white'
          color= 'dodgerblue'
          icon={{name: 'home-variant', type:'material-community', color: 'dodgerblue'}}
          title='Close'
          onPress={props.onModalClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  modalImage: {
    width: "100%",
    height: 200,
  },
  modalPlaceName: {
    fontWeight: 'bold', 
    textAlign: 'center',
    fontSize: 28,
  },
  iconSize: {
    fontSize: 30
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'center',

  }
})


export default PlaceDetail;