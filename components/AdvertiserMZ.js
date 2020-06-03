import React, { Component } from 'react';
import Advertiser from './Advertiser.js'
export default class AdvertiserMZ extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: '3',
  };
  render() {
   return (
      <Advertiser advertiserID = '102'   />
    );
}
}