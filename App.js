import {StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';
import React, { Component  } from 'react';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component {
  state = {
    storedValue: '',
    };
    onChange = (text) => {
      this.setState({ text }); }
  render() {
    const { storedValue, text,selectedLanguage } = this.state;
    return (
    <View style={styles.container}>
    <Text style={styles.preview}>{storedValue}</Text>
    <View>
<Picker
  style={styles.pickerStyle}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue, choosenIndex: itemIndex})  
  }>
  <Picker.Item label="1 Star" value="java" />
  <Picker.Item label="2 Stars" value="stars" />
  <Picker.Item label="3 Stars" value="stars" />
  <Picker.Item label="4 Stars" value="stars" />
  <Picker.Item label="5 Stars" value="stars" />

</Picker>
<Picker
  style={styles.pickerStyle}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue, choosenIndex: itemIndex})  
  }>
  <Picker.Item label="1 Star" value="java" />
  <Picker.Item label="2 Stars" value="stars" />
  <Picker.Item label="3 Stars" value="stars" />
  <Picker.Item label="4 Stars" value="stars" />
  <Picker.Item label="5 Stars" value="stars" />

</Picker>
<Picker
  style={styles.pickerStyle}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue, choosenIndex: itemIndex})  
  }>
  <Picker.Item label="1 Star" value="java" />
  <Picker.Item label="2 Stars" value="stars" />
  <Picker.Item label="3 Stars" value="stars" />
  <Picker.Item label="4 Stars" value="stars" />
  <Picker.Item label="5 Stars" value="stars" />

</Picker>
    <TouchableOpacity onPress={this.onSave} style=
    {styles.button}>
    <Text>Save locally</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.onLoad} style=
    {styles.button}>
    <Text>Load data</Text>
    </TouchableOpacity>
    </View>
    </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingTop: 40,
  },
  preview: {
  
  backgroundColor: '#bdc3c7',
  width: 300,
  height: 80,
  padding: 10,
  borderRadius: 5,
  color: '#333',
  marginBottom: 50,
  },
  input: {
  backgroundColor: '#ecf0f1',
  borderRadius: 3,
  width: 300,
  height: 40,
  padding: 5,
  },
  button: {
  backgroundColor: '#f39c12',
  padding: 10,
  borderRadius: 3,
  marginTop: 10,
  },
  pickerStyle:{  
    width:200,
    height:160
  }  
  });

