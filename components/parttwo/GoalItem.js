import { StyleSheet, Text, View,TouchableNativeFeedback } from 'react-native';
const GoalItem = (props) => {
    return (
    <TouchableNativeFeedback activeOpacity={0.9} onPress={props.onDelete.bind(this,props.id)}>
      <View  key={props.id} style={styles.listItem}>
          <Text>{props.value} {props.id}</Text>
      </View>
    </TouchableNativeFeedback>
    )
}


const styles = StyleSheet.create({
    listItem:{
      marginVertical:5,
      padding:10,
      borderColor:'black',
      borderWidth:1,
  
    }
  });
  
export default GoalItem