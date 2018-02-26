import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

// ScrollView vs. FlatList

import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {

  render(){
    
    return(
      <FlatList 
        style={styles.listContainer}
        data={this.props.places}
        renderItem={({item}) => (
          <ListItem 
            placeName={item.name} 
            placeImage={item.img}
            onItemPressed={()=> this.props.onItemSelected(item.key)}/>)}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});