/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {Input,Button} from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import {IP} from '../env/env';
import axios from 'axios';

const Login= props => {
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');
  const handleLoginChange = value =>{
    setLogin(value);
  }
  const handlePasswordChange = value=>{
    setPassword(value);
  }
  const pressButton = ()=>{
    axios.post('http://'+IP+'/auth/login',{
    login: login,
    password: password
    },{headers:{
      'Content-Type': 'application/json'
    }})
    .then(response=>{
      console.log(response.data);
    });
  }
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>
          Welcome in our App :)
        </Text>
        <Text style={styles.text2}>
          Save The world! 🌳 
        </Text>
        <Input placeholder="Login" value={login} onChangeText={handleLoginChange}/>
        <Input placeholder="Password" value={password} onChangeText={handlePasswordChange} secureTextEntry={true}/>
        <Button title="Login" buttonStyle={styles.button} onPress={pressButton}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    textAlign: 'center'
  },
  text2:{
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },  
  button:{
    backgroundColor: 'green',
    width: '50%',
    marginLeft: 100
  },
  view: {
    marginTop: 100,
    textAlign: 'center'
  }
});

Login.options = {
  topBar:{
    visible: false
  }
}


export default Login;
