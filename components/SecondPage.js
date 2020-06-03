import React, { Component } from 'react';
import AdvertisersList from './advertisersList.js'
export default class SecondPage extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: 'INFO',
    
    //drawerLabel:'INFO'
  };
  render() {
    return (
      <AdvertisersList/>
    );
  }
}


