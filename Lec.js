import { scrollview,styleSheet,View, Text } from 'react-native'
import React from 'react';

const App = () => {

 const clickMe = ()=>{
    alert('Hi Anuja');
 }   

  return (
    <View style={styles.container}>
     <Text
     onProgress={()=>clickMe()}
     style={{color:'black',fontsize:30,fontfamily:'monospace',fontWeight:'400',paddingleft:100,
     paddingBottom:10,paddingTop:10,paddingRight:100}}>Hiiii
     <Text style={{color:'red'}}
     > Monika</Text>
    
    </Text>
    </View>
  )
}

export default App; 

const style = StyleSheet.create({
    container:{
        flex:1,
        backgoundColor: 'white',
    },
    
})