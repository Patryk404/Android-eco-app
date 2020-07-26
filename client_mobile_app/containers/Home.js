import { View,Text,StyleSheet }  from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

const Home = props =>{
    return(
        <>
        <View style={styles.view}>
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