import React from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

const profile = props=>{
    // logic with our redux state
    return(
        <>
        <Text style={styles.text}>
            Profile
        </Text>
        <View style={styles.view}>
            <Text style={styles.textView}>
                o shit
            </Text>
            {
                props.logged ? <Text style={styles.text}>LOGGED</Text> : null
            }
        </View>
        </>
    );
};

profile.options = {
    topBar:{
        visible: false
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 40,
        marginTop: 30
    },
    textView:{
        marginLeft: 20
    }, 
    view:{
        marginTop: 30,
        width: '80%',
        marginLeft: 30,
        borderWidth: 3
    }
});

const mapStateToProps= state =>{
    return {
        logged: state.logged
    }
}

export default connect(mapStateToProps)(profile);