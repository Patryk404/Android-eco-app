import React,{useState} from 'react';
import {Text,View,ActivityIndicator,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import {IP} from '../env/env';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';


const register = props =>{
    const [state,setState] = useState({
        password: '',
        email: '', 
        error: null,
        login: '',
        loading: false
    });
    const onChangeInput = (state2) => (value)=>{
        setState({
            ...state,
            [state2]: value
        });
    };
    const onPressButton = ()=>{
        setState({
            ...state,
            loading: true
        });
        axios.post('http://'+IP+'/auth/new-account',{
            login: state.login,
            email: state.email,
            password: state.password
        })
        .then(response=>{
            //console.log('Registered lol');
            setState({
                ...state,
                loading: false
            });
            props.onLogged(response.data.token);
            Navigation.popToRoot(props.parentComponentId);
        }).catch(err=>{
            setState({
                ...state,
                error: err,
                loading: false
            });
        })
    };
    return(
    <>
        <View style={styles.view}>
            <Text style={styles.text}>Zarejestruj się ✔️</Text>
            <Input placeholder="Email" onChangeText={onChangeInput('email')} value={state.email}/>
            <Input placeholder="Nazwa Użytkownika" onChangeText={onChangeInput('login')} value={state.login}/>
            <Input placeholder="Hasło" secureTextEntry={true} onChangeText={onChangeInput('password')} value={state.password}/>
            {state.loading ? <ActivityIndicator size="large" color="green"/> :
              <Button title="Zarejestruj" buttonStyle={styles.Button} onPress={onPressButton}/>       
            }
            {
                state.error ? <Text style={styles.textErr}>Coś poszło nie tak 😵</Text> : null
            }
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    view:{
        marginTop: 50,
        textAlign: 'center'
    },
    text:{ 
        fontSize: 30,
        textAlign:'center',
        marginTop: 15
    },
    Button:{
        backgroundColor: 'green',
        width: '50%',
        marginLeft: 100
    },
    textErr:{
        marginTop: 30,
        fontSize: 18,
        textAlign: 'center'
    }
});

register.options ={
    topBar:{
        background: {
            color: 'green'
        },
        title:{
            text: 'Zarejestruj się',
            color: 'white'
        }
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        onLogged: (token)=>dispatch(actions.loggedInto(token))
    };
};

export default connect(null,mapDispatchToProps)(register);