import { useState, useEffect,  } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Titulo from '../components/ui/Titulo'; 
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween (1,  100,  userNumber );
    const [currentGuess, setCurrentGues] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary= 1;
        maxBoundary= 100;
    }, []);

    function nextGuessHandler(direction) { //direction ==> 'lower', 'greater'
        if ( (direction === 'lower' && currentGuess < userNumber ) 
        || (direction === 'greater' && currentGuess > userNumber )
    ) {
        Alert.alert("¡No mientas!", 'Tu sabes que esta mal..', 
        [{text: 'Bueno', style: 'cancel'},]);
        return; 
    }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }    else {
            minBoundary = currentGuess +1;
        }  
        console.log(minBoundary, maxBoundary);
     const newRndNumber = generateRandomBetween
     (minBoundary,
     maxBoundary, 
     currentGuess
    );

     setCurrentGues(newRndNumber);
     setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
       <Titulo>Opponent's Guess</Titulo>
       <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>
                Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-circle" size={24} color="white "/>
                 </PrimaryButton>
                        </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-circle" size={24} color="white"/>
                 </PrimaryButton>
             </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
           { /* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList 
         data={guessRounds}
         renderItem={(itemData) => <GuessLogItem
              roundNumber={ guessRoundsListLength - itemData.index}
               guess={itemData.item}/>}
         keyExtractor={(item) => item}
          />
        </View>
    </View> 
  );    
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12
  },
 buttonsContainer: {
    flexDirection: 'row',
   },
   buttonContainer: {
     flex: 1,
   },
   listContainer: {
        flex: 1,
        padding: 16,
        
   },
});