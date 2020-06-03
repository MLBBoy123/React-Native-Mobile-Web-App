import React, { Component } from 'react';
import {
  Image,
  FlatList,
  AppRegistry,
  Text,
  View,
  StyleSheet,
 
} from 'react-native';

export default class FourthPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'ADS',
  };
 constructor() {
    super();
    this.state = {
      dataSource: []
     
    };
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3, paddingTop: 50, paddingBottom: 50 }}>
        <Image
          style={{ width: 200, height: 100, margin: 5 }}
          source={{ uri: item.image }}
        />
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
          <Text style={{ fontSize: 18, color: '#fff', marginBottom: 15 }}>
          {item.advertname}
          </Text>
          <Text style={{ fontSize: 16, color: '#fff' }}> {item.advertisername} </Text>
        </View>
      </View>
    )
  }
  renderSeparator=()=>{
    return(
      <View
        style= {{height:1, width: '100%', backgroundColor: 'black'}}>
      </View>
    )
  }

  componentDidMount() {
    const url =
      'http://www.json-generator.com/api/json/get/bTZChslLhe?indent=2'

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.advert_array
         
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent = {this.renderSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    allignItems: 'center',
    backgroundColor: 'rgba(47,163,218, .6)'
  },
});