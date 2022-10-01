import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.accent,
    fontSize: 36,
    fontWeight: 'bold',

  },
});
