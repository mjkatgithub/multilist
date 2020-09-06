import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Container from '../shared/container';

export default function ShopiingList({ navigation }) {

  const [shopingItem, setShopingItem] = useState([
    { product: 'wurst', manufacturer: 'hans', notes: 'happa-happa', _id: '1' },
    { product: 'milch', manufacturer: 'mueller', notes: 'schluerf', _id: '2' },
    { product: 'brot', manufacturer: 'baecker', notes: 'bernd, das...', _id: '3' }
  ]);

  return (
    <Container>
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
    </Container>
  );
}
