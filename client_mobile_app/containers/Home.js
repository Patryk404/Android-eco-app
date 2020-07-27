import { ScrollView,Image,Text,StyleSheet }  from 'react-native';
import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {IP} from '../env/env';

const Home = props =>{
    const [photos,setPhotos] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
            setLoading(true);
            axios.get('http://'+IP+'/photos')
            .then(response=>{
                for(var i=0; i<response.data.photos.length; i++){
                    setPhotos(oldArray=>[...oldArray,response.data.photos[i].link]);
                };
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
                setLoading(false);
            })
    },[photos]);

    return(
        <>
        <ScrollView style={styles.view}>
            {
                photos.map((link,index)=>{
                    return (
                        <Image key={index} source={{uri:link}} style={{width: 350,height: 250, marginTop: 25,marginLeft: 30}}/>
                    );
                })
            }
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop: 30,
        textAlign: 'center'
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