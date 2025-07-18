
  import { useState } from 'react';
  import { StyleSheet, TextInput, View, Alert, Text} from 'react-native';
  import PrimaryButton from '../components/ui/PrimaryButton';
  import Colors from '../constants/colors';
  import Titulo from '../components/ui/Titulo';
  import Card from '../components/ui/Card';
  import InstructionText from '../components/ui/InstructionText';


  function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber]= useState('');
    
    function numberInputHandler(enteredText) {
      setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
      setEnteredNumber('');
    }
     
    function confirmInputHandler(){
      const choserNumber = parseInt(enteredNumber);

      if (isNaN(choserNumber) 
        || choserNumber <= 0 || choserNumber > 99) {
        // show alert...
        Alert.alert('Invalid Number', 'Number has to be a numer between 1 and 99. ',
          [{ text: 'Okay', style:'destructive', onPress: resetInputHandler }]
        );
        return; 
      }

       onPickNumber(choserNumber);

    }

    return (
    <View style={styles.rootContainer}>
      <Titulo>Adivina mi numero</Titulo>
      <Card>
        <InstructionText>
          Ingresa un Numero
          </InstructionText>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2}
        keyboardType='number-pad' 
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value= {enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
      <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
       </View>
      </Card>
    </View>
    );
  }

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
    numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 3,
    color: Colors.accent100,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  }

});
