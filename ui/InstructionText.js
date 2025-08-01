import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';


function InstructionText({children, style}) {
    return<Text style={[styles.instructionText, style]}>{children}</Text>;
    
    }





export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent100,
    fontSize: 24,
  }
});