// In index.js of a new project
const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');
const { useEffect,useState } = require('react');

// Home screen declaration
const HomeScreen = (props) => {
    const [state,setState] = useState(undefined);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setState(json.title));
    },[])
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
        {state ?        <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings',
            options: {
              topBar: {
                title: {
                  text: 'Settings'
                }
              }
            }
          }
        })}/> : null}
        <Text>
            {state}
        </Text>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
};

// Settings screen declaration - this is the screen we'll be pushing into the stack
const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
