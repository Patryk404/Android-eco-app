import React,{useEffect,useState} from 'react';
import {IP} from '../env/env';
import axios from 'axios';
import { Image,Text,StyleSheet } from 'react-native';

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
            setState({
                title: response.data.product.title,
                description: response.data.product.description
            });
        })
    },[]);
    return (
        <>
        <Image style={styles.image} source={{uri: 'http://www.pzstudio.pl/public/foto/photo/big/'+props.number_photo+'.jpg'}}/>
        <Text>{state.title}</Text>
        <Text>{state.description}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100
    }
});

export default InformationsPhoto;