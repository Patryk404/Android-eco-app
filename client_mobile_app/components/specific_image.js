import React from 'react';
import {Image,View,Text,StyleSheet} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const specificImage = props=>{
    return(
        <View style={{flex: 1}}>
            <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={0.5}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            style={{
                padding: 10,
                backgroundColor: 'black',
            }}
            >
                <Image source={{uri: props.link}} style={styles.image} resizeMode='contain'/>
            </ReactNativeZoomableView>
        </View>
    )
};

const styles = StyleSheet.create({
    image:{
        flex: 1,
        height: '100%',
        width: null,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});

specificImage.options = {
    topBar:{
        visible: true,
        background:{
            color: 'black'
        },
        backButton: {
            color: 'white'
        }
    },
    bottomTabs:{
        visible: false
    }
}

export default specificImage;