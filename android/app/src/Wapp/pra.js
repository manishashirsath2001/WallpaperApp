import { StatusBar, StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import Screen from './android/app/src/Wapp/Screen'
import Navbar from './android/app/src/Wapp/Navbar'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      {/* <RecoilRoot>
      <Navbar/>
      <Screen/>
      </RecoilRoot> */}
      
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    //flex:1,
    //alignItems:'center',
    //marginTop:20,
    //width:'100%',
    //height:'100%'
   }
})