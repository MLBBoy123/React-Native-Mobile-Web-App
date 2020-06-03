import React, { Component } from 'react';
import Advertiser from './Advertiser.js'
export default class AdvertiserEM extends Component<Props> {
  static navigationOptions = {
    tabBarLabel: '2',
  };
  render() {
   return (
      <Advertiser advertiserID = '101'   />
    );
}
}