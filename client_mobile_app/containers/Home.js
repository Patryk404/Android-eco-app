import { ScrollView,Image,ActivityIndicator,StyleSheet, TouchableOpacity }  from 'react-native';
import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
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
    const onImageClick = (link)=>{
        Navigation.push(props.parentComponentId,{
            component: {
                name: 'SpecificImage',
                passProps: {
                    link: link
                }
            }
        });
    };

    return(
        <>
        <ScrollView style={styles.view} nestedScrollEnabled={true}>
            {
                loading ? <ActivityIndicator size='large' color='#0000ff' style={styles.activityIndicator}/> : null
            }
            {
                photos.map((photo,index)=>{
                    return (
                        <TouchableOpacity key={index} onPress={()=>onImageClick(photo.link)} style={styles.container}>
                            <Image source={{uri:photo.link}} style={styles.image}/>
                        </TouchableOpacity>
                    );
                })
            }
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    image:{width: 350,height: 250, marginTop: 25},
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
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
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