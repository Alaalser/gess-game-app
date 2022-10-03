import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 36,
    alignItems: 'center',
    backgroundColor: Colors.primary500,
    elevation: 4,
    borderRadius: 10,
    margin: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
