import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Colors } from '../../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary300 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 32,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
