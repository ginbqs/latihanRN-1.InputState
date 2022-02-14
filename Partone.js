import {useState} from 'react'
import { StyleSheet, Text, View, Button,TextInput,FlatList,TouchableHighlight } from 'react-native';

export default function Partone() {
    const [listValue,setListValue] = useState([])
    const [inputValue,setInputValue] = useState('Testing')


    const inputHandle = (text) => {
        setInputValue(text)
    }
  
    const addListHandle = () => {
        setListValue(current => [...current,{id:Math.random().toString(),value: inputValue}])
    }
    const addDeleteGoalHandle = (id) => {
        setListValue(curent => {
            return curent.filter((val) => val.id !== id)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Masukan Kalimat'
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
                        onPress={addListHandle}
                        />
                </View>
            </View>
            <FlatList style={{padding:10}} 
                data={listValue}
                renderItem={item => (
                    <GoalItem id={item.item.id} value={item.item.value} onDelete={addDeleteGoalHandle} />    
                )}
            />
        </View>
    );
}

const GoalItem = (props) => {
    return (
        <TouchableHighlight activeOpacity={0.9} onPress={props.onDelete.bind(this,props.id)}>
            <View  key={props.id} style={styles.listItem}>
                <Text>{props.value} {props.id}</Text>
            </View>
        </TouchableHighlight>
      )
}
const styles = StyleSheet.create({
  inputContainer:{
    flexDirection:'row',
  },
  container: {
    padding:30,
    backgroundColor: 'white',
  },
  listItem:{
    marginVertical:5,
    padding:10,
    borderColor:'black',
    borderWidth:1,

  }
});
