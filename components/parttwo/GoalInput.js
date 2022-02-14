import {useState} from 'react'
import { StyleSheet, View, Button,TextInput } from 'react-native';

const GoalInput = (props) => {
    const [inputValue,setInputValue] = useState('Open up App.js to start working on your app')
    const inputHandle = (text) => {
      setInputValue(text)
      }
    return (
        <View style={styles.inputStyle}>
          <TextInput 
              placeholder='hais'
              style={{
                borderColor:'black',
                borderWidth:1,
                width:300,
                padding:10
              }}
              onChangeText={inputHandle}
              value={inputValue}
          />
          <View style={{padding:10}}>
            <Button 
              title='add'
              onPress={props.addGoal.bind(this,inputValue)}
            />
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    button:{
      backgroundColor:'red'
    },
    inputStyle:{
      flexDirection:'row',
    },
  });

  
export default GoalInput;