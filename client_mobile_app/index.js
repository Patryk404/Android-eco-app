// In index.js of a new project
import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import Home from './containers/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';
import About from './components/about';
import Register from './containers/Register';
import SpecificImage from './components/specific_image';
import {createStore} from 'redux';
import authReducer from './store/reducers/authReducer';

import React from 'react';

const store = createStore(authReducer);

Navigation.registerComponent('SpecificImage',()=>SpecificImage);
Navigation.registerComponent('About', ()=>About);
Navigation.registerComponent('Home', () => (props)=> // we must pass because we can't do this Navigation.push function
<Provider store={store}>
  <Home parentComponentId={props.componentId}/>
</Provider>,()=>Home);
Navigation.registerComponent('Login', () => (props)=>
<Provider store={store}>
  <Login parentComponentId={props.componentId}/>
</Provider>,()=>Login);
Navigation.registerComponent('Profile', () => (props)=>
<Provider store={store}>
  <Profile parentComponentId={props.componentId}/>
</Provider>,()=>Profile); 
Navigation.registerComponent('Register',()=> (props)=>
<Provider store={store}>
  <Register parentComponentId={props.componentId}/>
</Provider>,()=>Register);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'ABOUT_TAB',
              children: [
                {
                  component: {
                    id: 'ABOUT_SCREEN',
                    name: 'About'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require('./pictures/About.png'),
                  text: 'O autorze',
                  selectedIconColor: 'green'
                }
              }
            }
          },
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: 'Home'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require('./pictures/Home.png'),
                  text: 'Strona Główna', 
                  selectedIconColor: 'green'
                }
              }
            }
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'PROFILE_SCREEN',
                    name: 'Profile'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require('./pictures/Profile.png'),
                  text: 'Profil',
                  selectedIconColor: 'green'
                }
              }
            }
          },
        ]
      }
    }
  });
});