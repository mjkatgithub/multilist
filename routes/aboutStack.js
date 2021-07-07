import { createStackNavigator } from 'react-navigation-stack';;
import About from '../screens/about'
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About Mulitilist' />,
      }
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#404040',
    headerStyle: {backgroundColor: 'lightgray'}
  }
});

export default AboutStack;