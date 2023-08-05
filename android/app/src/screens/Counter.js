import { StyleSheet, Text, TouchableOpacity, View ,Button} from 'react-native'
import React, { useState } from 'react'
// import {} from'react-native-paper';

const App = () => {
    // let Counter = 0;
    const[Counter,setCounter] = useState(0);

    const Increment = () =>{
        setCounter(Counter + 1);
    }
    const Decrement = () =>{
      setCounter(Counter - 1);
    }

  return (
    <View style={styles.buttonContainer}>
    <View style={styles.Container}>
      <View>
      <Text style={styles.CounterText}>{Counter}</Text>
      </View>
      {/* <View style={styles.buttonContainer}></View> */}
      
      <TouchableOpacity style={styles.buttonstyle}
      onPress={Increment} >
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonstyle}
      onPress={Decrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    margin: 20
  },
  Container:{
      flexDirection:'row',
      justifyContent:'center',
      margin: 20,
    
    },

    CounterText:{
      flexDirection:'row',
      fontSize: 25,
      fontWeight: '600',
      color: 'white',
      marginTop: 50,

    },
    buttonstyle:{
      padding: 13,
      color: '#2c3041',
      margin: 5,
      width: '54%',
      backgroundColor: '#F5F6FA',
      marginTop:30,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#3a3c57',
  
    },
})