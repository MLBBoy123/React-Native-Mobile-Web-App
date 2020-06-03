import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
export default class Advertiser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var advertiserData;
    switch (this.props.advertiserID) {
      case '100':
        advertiserData = require('./advertisers/BillGates.json');
        break;
      case '101':
        advertiserData = require('./advertisers/ElonMusk.json');
        break;
      case '102':
        advertiserData = require('./advertisers/MarkZuckerberg.json');
        break;
      default:
        advertiserData = require('./advertisers/BillGates.json');
        break;
    }
    this.setState({
      advert: advertiserData.advert,
      name: advertiserData.name,
      id: advertiserData.id,
      picture: advertiserData.picture,
      subject: advertiserData.subject,
    });
  }

  render() {
    let pic = {
      uri: this.state.picture,
    };
    return (
      <ImageBackground
        source={{
          uri:
            'https://previews.123rf.com/images/axsimen/axsimen1808/axsimen180800069/111682329-computer-parts-isometric-set-inside-the-computer-case-hardware-elements-hard-disk-drive-motherboard-.jpg',
        }}
        style={styles.container}>
        <View style={styles.overlayContainer}>
          <View style={styles.main}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Image source={pic} style={styles.picture} />
            <Text style={styles.adverttext}>Advert</Text>
            <FlatList
              style={styles.list}
              data={this.state.advert}
              renderItem={({ item }) => (
                <Text style={styles.listname}> {item.subject}</Text>
              )}
              keyExtractor={(item, index) => item.subject}
            />
          </View>
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
    justifyContent: 'center',
  },
  main: {
    marginTop: 30,
    marginLeft: 20,
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 32,
    paddingBottom: 20,
  },
  picture: {
    width: 200,
    height: 300,
  },
  list: {
    paddingTop: 20,
  },

  listname: {
    color: '#fff',
    fontSize: 16,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
  adverttext: {
    color: '#fff',
    fontSize: 23,
    paddingTop: 20,
  },
});
