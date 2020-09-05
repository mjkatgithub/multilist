import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ShopiingList({ navigation }) {

  const [shopingItem, setShopingItem] = useState([
    { product: 'wurst', manufacturer: 'hans', notes: 'happa-happa', _id: '1' },
    { product: 'milch', manufacturer: 'mueller', notes: 'schluerf', _id: '2' },
    { product: 'brot', manufacturer: 'baecker', notes: 'bernd, das...', _id: '3' }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        keyExtractor={ (item) => item._id }
        data={shopingItem}
        renderItem={({item}) => (
          <TouchableOpacity onPress={ () => navigation.navigate("Item Deteils", item) }>
            <Text style={globalStyles.titleText}>{item.product}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
