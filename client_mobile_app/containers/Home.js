import { View,Text,StyleSheet }  from 'react-native';
import { Navigation } from 'react-native-navigation';
import {Button} from 'react-native-elements';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';

const Home = props =>{
    const buttonhandler=()=>{
       Navigation.push(props.parentComponentId, {
            component: {
              name: 'Login'
            }
          });
    };
    return(
        <>
        <View style={styles.view}>
            <Text style={styles.text}>
                Home
            </Text>
            <Button buttonStyle={styles.button} title='Signin' onPress={buttonhandler}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop: 30
    },
    button:{
        width: '50%',
        marginLeft: 100,
        marginTop: 50,
        backgroundColor: 'green'
    }, 
    text: {
        textAlign: 'center',
        fontSize: 50
    }
})

Home.options = {
    topBar:{
        visible: false
    }
}

const mapStateToProps = state =>{
    return {
        logged: state.logged
    }
};

export default connect(mapStateToProps)(Home);