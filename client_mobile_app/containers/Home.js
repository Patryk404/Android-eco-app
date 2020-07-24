/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Input,Button} from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


const Home= props => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>
          Welcome in our App :)
        </Text>
        <Text style={styles.text}>
          Save The world! 🌳 
        </Text>
        <Input placeholder="Login"/>
        <Input placeholder="Password"/>
        <Button title="Login" buttonStyle={styles.button}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    textAlign: 'center'
  },
  button:{
    backgroundColor: 'green',
    width: '50%',
  },
  view: {
    marginTop: 100,
    textAlign: 'center'
  }
});
Home.options ={
  topBar:{
    title: {
    text: 'Home',
    color: 'white'
    },
    background: {
      color: 'green'
    }
  }
}



export default Home;
