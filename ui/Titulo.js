import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';


function Titulo({children}){
 return (
 <Text style={styles.Titulo}> {children} </Text>
 );
}

export default Titulo;

const styles = StyleSheet.create({
  Titulo: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: Colors.accent100,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent100,
    padding: 12
  }
});
