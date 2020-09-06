import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity, Modal, StyleSheet, View} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Container from '../shared/container';
import { MaterialIcons } from '@expo/vector-icons';
import { ScreenStackHeaderRightView } from 'react-native-screens';

export default function ShopiingList({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [shopingItem, setShopingItem] = useState([
    { product: 'wurst', manufacturer: 'hans', notes: 'happa-happa', _id: '1' },
    { product: 'milch', manufacturer: 'mueller', notes: 'schluerf', _id: '2' },
    { product: 'brot', manufacturer: 'baecker', notes: 'bernd, das...', _id: '3' }
  ]);

  return (
    <Container>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            style={styles.modalClose}
            onPress={() => setModalOpen(false)}
          />
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>

      <FlatList
        keyExtractor={ (item) => item._id }
        data={shopingItem}
        renderItem={({item}) => (
          <TouchableOpacity onPress={ () => navigation.navigate('ShopingItemDetails', item) }>
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
    flex: 1
  }

});