import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

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
          <Button title="Delete" onPress={props.onDeletePlace} color="red" />
          <Button title="Close" onPress={props.onModalClose}/>
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
  }
})


export default PlaceDetail;