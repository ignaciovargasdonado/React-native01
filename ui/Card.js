import { StyleSheet, View } from "react-native";
import Colors from '../../constants/colors';

function Card({children}){
 return  <View style={styles.card}>{children}</View>;

}


export default Card;

const styles = StyleSheet.create({
      card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 24,
    elevation: 8,
    // shadowColor: 'black', ---> esto es para iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 1,
      }
});
 
