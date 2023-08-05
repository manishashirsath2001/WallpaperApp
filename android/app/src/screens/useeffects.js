import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState,useEffect} from 'react'

const App = () => {

  const[Counter,setCounter] = useState(0);
  const[demo,setDemo] = useState('Mahi');

  useEffect(() =>{
    console.warn("UseEffect Call");
  },[Counter]);
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30}}>{Counter}</Text>
      <Text style={{textAlign:'center',fontSize:30}}>{demo}</Text>

      <Button title='update' onProgress={() =>setCounter(Counter+1)}></Button>
      <Button title='update name' onProgress={() =>setDemo('mani')}></Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})