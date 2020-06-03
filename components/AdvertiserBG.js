import React, { Component } from 'react';
import Advertiser from './Advertiser.js'
export default class AdvertiserBG extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: '1',
    //drawerLabel:'INFO'
  };
  render() {
   return (
      <Advertiser advertiserID = '100'/>
  
    );
}
}