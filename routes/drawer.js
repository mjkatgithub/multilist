import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import ShoppingStack from './shoppingStack';
import TodoStack from './todoStack';

const RootDrawerNavigator = createDrawerNavigator({
  "Shopping List": {
    screen: ShoppingStack
  },
  "Todo List":{
    screen: TodoStack
  },
  About: {
    screen: AboutStack
  }
},{
  drawerPosition: 'left',
  drawerBackgroundColor: 'rgba(200, 200, 200, 0.9)',
});

export default createAppContainer(RootDrawerNavigator);

//drawerBackgroundColor: '#0000FF',