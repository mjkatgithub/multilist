import { createStackNavigator } from 'react-navigation-stack';;
import About from '../screens/about'

const screens = {
  About: {
    screen: About,
    navigationOptions:{
      title: 'About Multilist',
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