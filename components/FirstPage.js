import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class FirstPage extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
 
    //drawerLabel:'Home'
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri:           'https://previews.123rf.com/images/axsimen/axsimen1808/axsimen180800069/111682329-computer-parts-isometric-set-inside-the-computer-case-hardware-elements-hard-disk-drive-motherboard-.jpg',
        }}
        style={styles.container}>
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>H O M E</Text>
          </View>
          <Text style={styles.body}>
            Welcome to the homepage of IT in the Valley. Where our magazine
            features various of articles and adverts.
          </Text>
          <Text style={styles.body}>
            This is the Marketing Department where you will find details of
            advertisers and their adverts.
          </Text>
          <Text style={styles.body}>
            You can also navigate to other pages for its content.
          </Text>
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
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
  },
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
});
