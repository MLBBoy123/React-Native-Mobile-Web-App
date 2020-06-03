import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native';
export default class AdvertisersList extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    var advertiserListData;
    advertiserListData = require('../components/advertisers/advertisers.json');
    this.setState({
      advertisers: advertiserListData.advertisers,
    });
  }
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://previews.123rf.com/images/axsimen/axsimen1808/axsimen180800069/111682329-computer-parts-isometric-set-inside-the-computer-case-hardware-elements-hard-disk-drive-motherboard-.jpg',
        }}
        style={styles.container}>
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.title}>List of Advertisers</Text>
          </View>
          <FlatList
            style={styles.list}
            data={this.state.advertisers}
            renderItem={({ item }) => (
              <Text style={styles.body}>
                {' '}
                ID: {item.id} {item.name}
                {'             '}
                {item.phone}
              </Text>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .7)',
  },

  title: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  list: { paddingTop: 20 },

  body: {
    color: '#fff',
    fontSize: 16,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
