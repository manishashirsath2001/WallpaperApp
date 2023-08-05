import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputCustom = ({ placeHolder, label, passInvisible, onChangeText, error })=> {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeHolder}
        secureTextEntry={passInvisible}
        onChangeText={onChangeText}
      ></TextInput>
      <Text style={styles.errorStyle}>{error}</Text>
    </View>
  )
}

export default TextInputCustom

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
    marginBottom: 10
  },
  errorStyle: {
    color: 'red'
  }

})