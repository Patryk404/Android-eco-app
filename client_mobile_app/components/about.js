import React,{useEffect} from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
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
        <ScrollView>
            <View style={styles.view}>
            <Text style={styles.text_title}>
                        Zbigniew Panów
                    </Text>
                <View style={styles.view_informations}>
                    <Text style={styles.text_title2}>
                    Dobra fotografia wymaga świadomości, zrozumienia i wrażliwość na dany temat. 
                    Fotografia krajobrazu ma zdolność do uchwycenia  ekspresji wizualnej w danej  chwili i miejscu, 
                    to proces przechwytywania światła i formy przez fotografa za pomocą magii aparatu fotograficznego. 
                    Chcemy rozbudzić twoją ciekawość żebyś był stale otwarty na nieoczekiwane obrazy, by inspirować i wywołać twoje zainteresowanie  
                    na rzecz ochrony  krajobrazu, zanim zostanie stracony na zawsze. 
                    Świadomość ta zwiększa poczucie spełnienia, wdzięczności i odpowiedzialności za ochronę naszego dziedzictwa.
                    </Text>
                </View>
                <Text style={styles.text_contact}>
                    Kontakt
                </Text>
                <View style={styles.view_contact}>
                    <Text style={styles.text_contact_view}>
                        e-mail: xxx@xxx.pl
                    </Text>
                    <Text style={styles.text_contact_view}>
                        tel: 696 996 006
                    </Text>
                    <Text style={styles.text_contact_view}>
                        (Od 10 do 16)
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    text_title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    text_title2: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    text_contact:{
        fontSize: 30,
        marginTop: 50
    },
    view_contact:{
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(158, 150, 150, .9)',
        backgroundColor: '#e6e6e6',
        width: 380,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_contact_view:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    view_informations:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(158, 150, 150, .9)',
        backgroundColor: '#e6e6e6',
        width: 380,
    }
});

about.options = {
    topBar:{
        visible: false
    }
}

export default about;