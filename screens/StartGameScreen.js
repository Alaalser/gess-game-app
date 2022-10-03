import PrimaryButton from '../components/ui/PrimaryButton';
import { StyleSheet, View, TextInput, Alert, Text } from 'react-native';
import { useState } from 'react';
import { Colors } from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionalText from '../components/ui/InstructionalText';

const StartGameScreen = ({ onStartGame }) => {
  const [inputNumber, setInputNumber] = useState('');

  const inputTextHandler = (inputText) => {
    setInputNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const confirmTextHandler = () => {
    const chosenNumber = parseInt(inputNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onStartGame(chosenNumber);
  };

  const resetInputHandler = () => {
    setInputNumber('');
  };

  return (
    <View style={styles.screen}>
      <Title>Start a New Game!</Title>
      <Card>
        <InstructionalText>Enter a number</InstructionalText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={inputNumber}
          onChangeText={inputTextHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWidth}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonWidth}>
            <PrimaryButton onPress={confirmTextHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    marginVertical: 10,
    color: Colors.accent,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonWidth: {
    flex: 1,
  },
});
