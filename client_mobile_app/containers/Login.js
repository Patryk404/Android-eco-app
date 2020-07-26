import React,{useState} from 'react';
import {Input,Button} from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import {IP} from '../env/env';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import { Navigation } from 'react-native-navigation';

const Login= props => {
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState();
  const handleLoginChange = value =>{
    setLogin(value);
  }
  const handlePasswordChange = value=>{
    setPassword(value);
  }
  const pressButton = ()=>{
    axios.post('http://'+IP+'/auth/login',{ // because localhost not working correctly with react native
    login: login,
    password: password
    },{headers:{
      'Content-Type': 'application/json'
    }})
    .then(response=>{
      props.onLogged();
      Navigation.pop(props.parentComponentId);
      //console.log(response);
    }).catch(err=>{
      setError(err);
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
        {
          error ? <Text style={styles.textErr}>Something went wrong :(</Text> : null
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    textAlign: 'center'
  },
  textErr:{
    marginTop: 30,
    fontSize: 18,
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
    background:{
      color: 'green'
    },
    title:{
      text: 'SignIn',
      color: 'white'
    }
  }
}


const mapDispatchToProps = dispatch =>{ 
  return {
    onLogged: ()=>dispatch(actions.loggedInto())
  };
};

export default connect(null,mapDispatchToProps)(Login);
