import { StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontSize: 24,
  },
});
