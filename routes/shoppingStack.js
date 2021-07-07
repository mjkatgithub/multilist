import { createStackNavigator } from 'react-navigation-stack';
import ShoppingList from '../screens/shoppingList';
import ShoppingItemDetails from '../screens/shoppingItemDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  ShoppingList: {
    screen: ShoppingList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Shopping List' />,
      }
    }
  },
  ShoppingItemDetails: {
    screen: ShoppingItemDetails,
    navigationOptions:{
      title: 'Product Details',
      //headerStyle: {backgroundColor: 'lightgray'}
    }
  }
};

const ShoppingStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#404040',
    headerStyle: {backgroundColor: 'lightgray'}
  }
});

export default ShoppingStack;