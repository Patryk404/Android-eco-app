import React,{useEffect} from 'react';
import {View,Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

const about = props =>{
    useEffect(()=>{
        Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
            bottomTabs: {
              currentTabIndex: 1,
              backgroundColor: '#f2f2f2',
              hideOnScroll: true
            }
          });
    },[])
    return (
            <View>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                    Coś o autorze
                </Text>
            </View>
    )
};

about.options = {
    topBar:{
        visible: false
    }
}

export default about;