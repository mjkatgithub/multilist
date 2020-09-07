import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 2,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5
  },
  errorText: {
    color: 'firebrick',
    fontWeight: 'bold',
    marginBottom: 8
  }
});
