import React,{useEffect,useState} from 'react';
import {Text,Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {IP} from '../env/env';
import axios from 'axios';
import * as actions from '../store/actions/index';

const informations = props =>{
    const [login,setLogin] = useState('');
    useEffect(()=>{
        axios.get('http://'+IP+'/user',{
            headers:{
                "Authorization": 'Bearer '+props.token
            }
        },[])
        .then(response=>{
            setLogin(response.data.account.login);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]); 
    const buttonClick = () =>{
     props.logOut();
    };
    return(
        <>
        <Image style={styles.image} source={require('../pictures/dummy.jpg')} />
        <Text style={styles.text}>
            {login}
        </Text>
        <Button title='Wyloguj' buttonStyle={styles.Button} onPress={buttonClick}/>
        </>
    );
};

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 40
    },
    image:{
        borderRadius: 300,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0,.25)',
        width: '60%',
        height: '40%',
        marginLeft: 80,
        marginTop: 30,
    },
    Button:{
        width: '50%',
        marginLeft: 100,
        marginTop: 50,
        backgroundColor: 'green'
    }
});

const mapStateToProps = state =>{
    return {
        token: state.token
    };
}; 

const mapDispatchToProps = dispatch =>{
    return{
        logOut: ()=>dispatch(actions.logOut())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(informations);