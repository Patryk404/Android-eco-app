import React,{useEffect,useState} from 'react';
import {IP} from '../env/env';
import axios from 'axios';
import {Navigation} from 'react-native-navigation'
import { Image,Text,StyleSheet,View, ScrollView,TouchableOpacity } from 'react-native';

const InformationsPhoto = props =>{
    const [state,setState] = useState({
        title: '',
        description: ''
    });
    useEffect(()=>{
        axios.get('http://'+IP+'/products/product',{headers:{
            url: props.url
        }})
        .then(response=>{
            let title;
            try{ // because scraper not working perfect
                title = response.data.product.title.split('Słowa kluczowe:')[0].trimRight();
                }
            catch{
                    title=response.data.product.title
            }
            let description;
            if (!response.data.product.description){
                description='Oj wygląda na to że to zdjęcie nie ma opisu 🥺'
            }
            else{
                description= response.data.product.description;
            }
            setState({
                title: title,
                description: description
            });
        })
    },[]);
    const photoClick = () =>{
        Navigation.push(props.componentId,{
            component:{
                name: 'SpecificImage',
                passProps: {
                    link: 'http://www.pzstudio.pl/public/foto/photo/big/'+props.number_photo+'.jpg'
                }
            }
        });
    }
    return (
        <>
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.text_title}>{state.title}</Text>
                <TouchableOpacity onPress={photoClick}>
                    <Image style={styles.image} source={{uri: 'http://www.pzstudio.pl/public/foto/photo/big/'+props.number_photo+'.jpg'}}/>
                </TouchableOpacity>
                <View style={styles.description_view}>
                    <Text style={styles.text_description}>{state.description}</Text>
                </View>
            </View>
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    image:{
        width: 350,
        height: 250, 
        marginTop: 25,
        marginBottom: 25
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_description: {
        textAlign: 'center',
        fontSize: 20
    },
    text_title:{
        fontSize: 30
    },
    description_view:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(158, 150, 150, .9)',
        backgroundColor: '#e6e6e6',
        width: 380,
        marginBottom: 20
    }
});

InformationsPhoto.options={
    topBar:{
        background:{
            color:'green'
        },
        title: {
            text: 'Opis',
            color: 'white'
        }
    },
    bottomTabs:{
        visible: false
    }
}

export default InformationsPhoto;