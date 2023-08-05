import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project = () => {
  return (
    <View style={styles.Container}>
      <Text>Project</Text>
    </View>
  )
}

export default Project

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black',
        textAlign:'center'
      }
})