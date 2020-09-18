import React from 'react';
import { StyleSheet, Button, TextInput, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ScrollView } from 'react-native-gesture-handler';

const shoppingItemSchema = yup.object({
    product: yup.string()
      .required()
      .min(3),
    manufacturer: yup.string(),
    amount: yup.string()
    .required()
    .test('numeric?', 'Amount must be a number 1-99', (val)=>{
      return parseInt(val) > 0 && parseInt(val) < 100;
    }),
    notes: yup.string()
});

export default function ShoppingItemForm({ addShopingItem }) {
  return(
    <View style={globalStyles.container}>
      <ScrollView>
        <Formik
          initialValues={{ product: '', manufacturer: '', amount: '', notes: '', _id: '' }}
          validationSchema={shoppingItemSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            addShopingItem(values);
          }}
        >
          {(formikProps) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Product'
                onChangeText={formikProps.handleChange('product')}
                value={formikProps.values.product}
                onBlur={formikProps.handleBlur('product')}
              />
              <Text style={globalStyles.errorText}>{formikProps.touched.product && formikProps.errors.product}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Manufacturer'
                onChangeText={formikProps.handleChange('manufacturer')}
                value={formikProps.values.manufacturer}
                onBlur={formikProps.handleBlur('manufacturer')}
              />
              <Text style={globalStyles.errorText}>{formikProps.touched.manufacturer && formikProps.errors.manufacturer}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='amount (1-99)'
                onChangeText={formikProps.handleChange('amount')}
                value={formikProps.values.amount}
                keyboardType='numeric'
                onBlur={formikProps.handleBlur('amount')}
              />
              <Text style={globalStyles.errorText}>{formikProps.touched.amount && formikProps.errors.amount}</Text>

              <TextInput
                multiline
                style={globalStyles.input}
                placeholder='Notes'
                onChangeText={formikProps.handleChange('notes')}
                value={formikProps.values.notes}
                onBlur={formikProps.handleBlur('notes')}
              />
              <Text style={globalStyles.errorText}>{formikProps.touched.notes && formikProps.errors.notes}</Text>

              <Button title='submit' color='green' onPress={formikProps.handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
