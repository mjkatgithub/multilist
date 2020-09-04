import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ShopingList from '../screens/shopingList';
import ShopingItemDeteils from '../screens/ShopingIdemDetails';

const screens = {
  "Shoping List": {
    screen: ShopingList
  },
  "Item Deteils": {
    screen: ShopingItemDeteils
  }
};

const ShopingListStack = createStackNavigator(screens);

export default createAppContainer(ShopingListStack);