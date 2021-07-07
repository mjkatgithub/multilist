import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity, Modal, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Container from '../shared/container';
import { MaterialIcons } from '@expo/vector-icons';
import ShoppingItemForm from './shoppingItemForm';

export default function ShoppingList({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([
    { product: 'wurst', manufacturer: 'hans', amount: 1, notes: 'happa-happa', _id: '1' },
    { product: 'milch', manufacturer: 'mueller', amount: 5, notes: 'schluerf', _id: '2' },
    { product: 'brot', manufacturer: 'baecker', amount: 3, notes: 'bernd, das...', _id: '3' }
  ]);

  const addShoppingItem = (shoppingItem) => {
    shoppingItem._id = Math.random().toString();
    setShoppingItems((currentShoppingItems) => {
      return [shoppingItem, ...currentShoppingItems]
    });
    setModalOpen(false);
  };

  return (
    <Container>
      <Modal visible={modalOpen} animationType='slide'>
        <Container>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name='close'
                size={24}
                style={styles.modalClose}
                onPress={() => setModalOpen(false)}
              />
              <ShoppingItemForm addShopingItem={addShoppingItem}/>
            </View>
            </TouchableWithoutFeedback>
        </Container>
      </Modal>

      <FlatList
        keyExtractor={ (item) => item._id }
        data={shoppingItems}
        renderItem={({item}) => (
          <TouchableOpacity onPress={ () => navigation.navigate('ShoppingItemDetails', item) }>
            <Card>
              <Text style={globalStyles.titleText}>{item.product}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalAdd}
        onPress={() => setModalOpen(true)}
      />

    </Container>
  );
}

const styles = StyleSheet.create({
  modalAdd: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'darkgreen',
    padding: 19,    
    width: 60,  
    height: 60,   
    borderRadius: 30,                                                
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10, 
    backgroundColor: 'rgba(0, 128, 0, 0.8)',
  },
  modalClose: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }

});