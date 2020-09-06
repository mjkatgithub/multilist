import { createStackNavigator } from 'react-navigation-stack';
import ShopingList from '../screens/shopingList';
import ShopingItemDetails from '../screens/shopingItemDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  ShopingList: {
    screen: ShopingList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Shoping List' />,
      }
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

export default ShopingListStack; 