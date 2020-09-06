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
},{
  drawerPosition: 'left',
  drawerBackgroundColor: 'rgba(200, 200, 200, 0.9)',
});

export default createAppContainer(RootDrawerNavigator);

//drawerBackgroundColor: '#0000FF',