// In index.js of a new project
import { Navigation } from 'react-native-navigation';
import Home from './containers/Home';
import React from 'react';


Navigation.registerComponent('Home', () => Home);

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