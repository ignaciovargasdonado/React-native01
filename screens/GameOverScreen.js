import { StyleSheet, TextInput, View, Image, Text } from 'react-native';

import Titulo from '../components/ui/Titulo';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}> 
<Titulo>GAME OVER!</Titulo>
<View style={styles.imageContainer}>
  <Image style={styles.image}
   source={require('../assets/images/success.png')}/>
 </View>
 <Text style={styles.summaryText}>
    Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text>
    rounds to guess the number <Text style={styles.highLight}>{userNumber}</Text>
 </Text>
  <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>

 );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
  fontFamily: 'open-sans',
  fontSize: 24,
  textAlign: 'center',
  marginBottom: 24,
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  },
});