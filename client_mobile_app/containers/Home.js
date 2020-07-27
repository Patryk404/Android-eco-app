import { ScrollView,Image,ActivityIndicator,StyleSheet }  from 'react-native';
import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {IP} from '../env/env';

const Home = props =>{
    const [photos,setPhotos] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if(photos.length === 0)
        {
            setLoading(true);
            axios.get('http://'+IP+'/photos')
            .then(response=>{
                setPhotos(response.data.photos);
                setLoading(false);
            })
            .catch(err=>{
                setLoading(false);
                console.log(err);
            })
        }
    },[]);

    return(
        <>
        <ScrollView style={styles.view}>
            {
                loading ? <ActivityIndicator size='large' color='#0000ff' style={styles.activityIndicator}/> : null
            }
            {
                photos.map((photo,index)=>{
                    return (
                        <Image key={index} source={{uri:photo.link}} style={styles.image}/>
                    );
                })
            }
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    image:{width: 350,height: 250, marginTop: 25,marginLeft: 30},
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