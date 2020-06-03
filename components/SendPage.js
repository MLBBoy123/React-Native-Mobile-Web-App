import React from 'react';
import {
  ImageBackground,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class SendPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'SEND',

    //drawerLabel:'Send'
  };
  constructor(props) {
    super(props);

    this.state = {
      
      items: [
        {
          label: 'Small',
          value: 'Small',
        },
        {
          label: 'Medium',
          value: 'Medium',
        },
        {
          label: 'Large',
          value: 'Large',
        },
      ],

      
      items2: [
        {
          label: 'Front Page',
          value: 'Front Page',
        },

        {
          label: 'Middle Page',
          value: 'Middle Page',
        },
        {
          label: 'Back Page',
          value: 'Back Page',
        },
        {
          label: 'Random Page',
          value: 'Random Page',
        },
      ],

      
      items3: [
        {
          label: 'Bill Gates',
          value: 'Bill Gates',
        },
        {
          label: 'Elon Musk',
          value: 'Elon Musk',
        },
        {
          label: 'Mark Zuckerberg',
          value: 'Mark Zuckerberg',
        },
      ],
    };
  }

  render() {
    return (
      <ImageBackground source={{
          uri:           'https://previews.123rf.com/images/axsimen/axsimen1808/axsimen180800069/111682329-computer-parts-isometric-set-inside-the-computer-case-hardware-elements-hard-disk-drive-motherboard-.jpg',
        }}
        style={styles.container}>
        <View style = {styles.overlayContainer}>
      <View style={styles.form}>
        <Text style={styles.text}> Advert Name</Text>
        <TextInput style={styles.input} />

        <View style={{ paddingVertical: 2 }} />

        <Text style={styles.text}> Size</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Choose your advert size...',
            value: null,
          }}
          items={this.state.items}
          onValueChange={value => {
            this.setState({
              favSize: value,
            });
          }}
        />

        <View style={{ paddingVertical: 5 }} />

        <Text style={styles.text}> Location </Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select a location...',
            value: null,
          }}
          items={this.state.items2}
          onValueChange={value => {
            this.setState({
              favLocation: value,
            });
          }}
        />

        <View style={{ paddingVertical: 5 }} />

        <Text style={styles.text}> Paid by</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Choose your advertisers...',
            value: null,
          }}
          items={this.state.items3}
          onValueChange={value => {
            this.setState({
              favPaid: value,
            });
          }}
        />

        <View style={{ paddingVertical: 5 }} />

        <Text style={styles.text}> Additional Comments</Text>
        <TextInput style={styles.input} />
        <View style={{ paddingVertical: 5 }} />
        <Button
          onPress={() => {
            alert('Details have been sent to the editing Department');
          }}
          title="Submit"
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
  },
  form: {
    paddingTop: 30,
    justifyContent: 'center',
    paddingHorizontal: 0,
    fontSize: 12,
    paddingBottom: 12,
  },
  text: {
    color: '#fff',
    paddingBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
    fontSize: 15,
  },
});
