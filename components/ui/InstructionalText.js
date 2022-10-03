import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

const InstructionalText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionalText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 18,
    marginBottom: 12,
    color: Colors.accent,
  },
});
