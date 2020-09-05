import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ShopingList from '../screens/shopingList';
import ShopingItemDetails from '../screens/shopingItemDetails';

const screens = {
  ShopingList: {
    screen: ShopingList,
    navigationOptions:{
      title: 'Shoping List',
      //headerStyle: {backgroundColor: 'lightgray'}
    }
  },
  ShopingItemDetails: {
    screen: ShopingItemDetails,
    navigationOptions:{
      title: 'Product Details',
      //headerStyle: {backgroundColor: 'lightgray'}
    }
  }
};

const ShopingListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#404040',
    headerStyle: {backgroundColor: 'lightgray'}
  }
});

export default createAppContainer(ShopingListStack);