import {useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/parttwo/GoalItem';
import GoalInput from './components/parttwo/GoalInput';

export default function Parttwo() {
  const [listInput,setListInput] = useState([])
  
  const addListHandle = (text) => {
    setListInput(current => [...current,{id:Math.random().toString(),value: text}])
  }
  const addDeleteGoalHandle = (id) => {
    setListInput(curent => {
      return curent.filter((val) => val.id !== id)
    })
    console.log('delete' +id)
  }
  return (
    <View style={styles.container}>
        <GoalInput 
            addGoal={addListHandle} 
        />
        <FlatList style={{padding:10}} 
            data={listInput}
            renderItem={item => (
                <GoalItem id={item.item.id} value={item.item.value} onDelete={addDeleteGoalHandle} />    
            )
            }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    backgroundColor: '#fff',
  },
});
