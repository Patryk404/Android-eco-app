import { ScrollView,Image,ActivityIndicator,StyleSheet,Text,View, TouchableOpacity }  from 'react-native';
import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {Button} from 'react-native-elements';
import axios from 'axios';
import {IP} from '../env/env';

const Home = props =>{
    const [photos,setPhotos] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if(photos.length === 0)
        {
            setLoading(true);
            axios.get('http://'+IP+'/products')
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
    const onButtonClick = (link) =>{
        const better_link = link.split('big/')[1];
        const number_photo = better_link.split('.')[0];
        Navigation.push(props.parentComponentId,{
            component: {
                name: 'InformationsImage',
                passProps: {
                    url: 'http://www.pzstudio.pl/window,'+number_photo+'.html',
                    number_photo: number_photo
                }
            }
        });
    }
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
                loading ? <ActivityIndicator size='large' color='green' style={{marginTop: 300}}/> : null
            }
            {
                photos.map((photo,index)=>{
                    if (photo.title)
                    {
                        try{ // because scraper not working perfect
                        photo.title = photo.title.split('Słowa kluczowe:')[0].trimRight();
                        }
                        catch{
                            photo.title = photo.title
                        }
                    return (
                        <TouchableOpacity key={index} onPress={()=>onImageClick(photo.link)} style={styles.container}>
                            <View style={styles.view2}>
                                <Text style={styles.text}>{photo.title}</Text>
                                <Image source={{uri:photo.link}} style={styles.image}/>
                                <Button title='Więcej' buttonStyle={styles.button} onPress={()=>onButtonClick(photo.link)}/>
                            </View>
                        </TouchableOpacity>
                    );
                    }
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
        textAlign: 'center',
    },
    button:{
        width: '50%',
        marginLeft: 100,
        marginTop: 50,
        backgroundColor: 'green'
    }, 
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'rgba(158, 150, 150, .9)',
        backgroundColor: '#e6e6e6'
    }, 
    button: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'green'
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