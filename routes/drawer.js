import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import ShopingListStack from './shopingListStack';

const RootDrawerNavigator = createDrawerNavigator({
  ShopingList: {
    screen: ShopingListStack
  },
  About: {
    screen: AboutStack
  }
});

export default createAppContainer(RootDrawerNavigator);