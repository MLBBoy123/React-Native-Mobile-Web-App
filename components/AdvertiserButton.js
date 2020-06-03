import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
export default class AdvertisersButton extends Component {
  static navigationOptions = {
    tabBarLabel: 'Find',
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://previews.123rf.com/images/axsimen/axsimen1808/axsimen180800069/111682329-computer-parts-isometric-set-inside-the-computer-case-hardware-elements-hard-disk-drive-motherboard-.jpg',
        }}
        style={styles.container}>
        <SafeAreaView style={styles.main}>
          <View style={styles.space}>
            <Text style={styles.title}>Bill Gates</Text>

            <Button
              title="View Details"
              onPress={() => this.props.navigation.navigate('page4')}
            />
          </View>
          <View style={styles.space}>
            <Text style={styles.title}>Elon Musk</Text>

            <Button
              title="View Details"
              onPress={() => this.props.navigation.navigate('page5')}
            />
          </View>

          <View style={styles.space}>
            <Text style={styles.title}>Mark Zuckerberg</Text>
            <Button
              title="View Details"
              onPress={() => this.props.navigation.navigate('page6')}
            />
          </View>
        </SafeAreaView>
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
  main: {
    flex: 1,
    marginTop: AdvertisersButton.statusBarHeight,
    backgroundColor: 'rgba(47,163,218, .7)',
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 30,
    color: '#fff',
  },
  space: {
    paddingBottom: 50,
    paddingTop: 50,
  },
});
