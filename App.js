import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
import addTodo from './components/addTodo'
import AddTodo from './components/addTodo';

export default function App() {

  //some dummy-data
  const [todos, setTodos] = useState([
    { text: 'do stuff', state: 'todo', _id: '1'},
    { text: 'do other stuff', state: 'todo', _id: '2'},
    { text: 'do nothing', state: 'todo', _id: '3'}
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter( todo => todo._id != id);
    });
  }

  const submitHandler = (text) => {

    if(text.length >= 3){
      setTodos((prevTodos) => {
        return [
          { text: text, state: 'todo', _id: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('text too short', 'a todo must consist of at least 3 characters', [
        {text: 'OK', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          keyExtractor={ (item) => item._id }
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20
  },
});
