import React,{useState} from 'react';
import {Input,Button} from 'react-native-elements';
import { View, Text,ActivityIndicator, StyleSheet } from 'react-native';
import {IP} from '../env/env';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import { Navigation } from 'react-native-navigation';

const Login= props => {
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState();
  const [loading,setLoading] = useState(false);

  const handleLoginChange = value =>{
    setLogin(value);
  }
  const handlePasswordChange = value=>{
    setPassword(value);
  }

  const pressButtonLogin = ()=>{
    setLoading(true);
    axios.post('http://'+IP+'/auth/login',{ // because localhost not working correctly with react native
    login: login,
    password: password
    },{headers:{
      'Content-Type': 'application/json'
    }})
    .then(response=>{
      setLoading(false);
      Navigation.pop(props.parentComponentId);
      props.onLogged(response.data.token);
      //console.log(response);
    }).catch(err=>{
      setError(err);
      setLoading(false);
    });
  }

  const pressButtonRegister = ()=>{
    Navigation.push(props.parentComponentId, {
      component: {
        name: 'Register'
      }
    });
  };

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>
          Witaj w naszej aplikacji 😀
        </Text>
        <Text style={styles.text2}>
          Uratuj świat 🌳 
        </Text>
        <Input placeholder="Nazwa Użytkownika" value={login} onChangeText={handleLoginChange}/>
        <Input placeholder="Hasło" value={password} onChangeText={handlePasswordChange} secureTextEntry={true}/>
        {
          loading ? <ActivityIndicator size="large" color="green"/> : 
          <Button title="Zaloguj" buttonStyle={styles.button} onPress={pressButtonLogin}/>
        }
        {
          error ? <Text style={styles.textErr}>Coś poszło nie tak 😵</Text> : null
        }
        <Text style={styles.textErr}>Nie masz konta?</Text>
        <Button title="Zarejestruj się" buttonStyle={styles.button} onPress={pressButtonRegister}/>
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
      text: 'Zaloguj się',
      color: 'white'
    }
  }
}


const mapDispatchToProps = dispatch =>{ 
  return {
    onLogged: (token)=>dispatch(actions.loggedInto(token))
  };
};

export default connect(null,mapDispatchToProps)(Login);
