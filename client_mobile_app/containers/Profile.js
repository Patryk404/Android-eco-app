import React from 'react';
import { Text,StyleSheet, Image,View } from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Informations from './informations_user';

const profile = props=>{
    const buttonHandler=()=>{
        Navigation.push(props.parentComponentId, {
             component: {
               name: 'Login'
             }
           });
     };
    let informations = null;
    if(props.logged)
    {
        informations = <Informations/>
    }
    else {
        informations = (<>
            <Image style={styles.image} source={require('../pictures/dummy.jpg')} />
            <Text style={styles.textImage}>Małpa Pusia</Text>
            <Text style={styles.textButton}>Przepraszamy ale nie jesteś zalogowany🥺</Text>
            <Button title='Zaloguj się' buttonStyle={styles.Button} onPress={buttonHandler}/>
        </>)
    }
    return(
        <>
            {informations}
        </>
    );
};

profile.options = {
    topBar:{
        visible: false
    }
}

const styles = StyleSheet.create({
    image:{
        borderRadius: 300,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0,.25)',
        width: '60%',
        height: '40%',
        marginLeft: 80,
        marginTop: 30,
    },
    textView:{
        marginLeft: 20,

    }, 
    textImage: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 30
    },
    textButton:{
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 50
    },
    Button:{
        width: '50%',
        marginLeft: 100,
        backgroundColor: 'green'
    }
});

const mapStateToProps= state =>{
    return {
        logged: state.logged
    }
}

export default connect(mapStateToProps)(profile);