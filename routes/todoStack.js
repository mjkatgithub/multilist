import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import TodoList from '../screens/todoList'


const screens = {
    TodoList: {
      screen: TodoList,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Todo List' />,
        }
      }
    }
  };

  const TodoStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#404040',
      headerStyle: {backgroundColor: 'lightgray'}
    }
  });

  export default TodoStack;