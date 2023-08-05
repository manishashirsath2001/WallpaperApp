import { View, Text, StyleSheet, Alert, TouchableOpacity, PixelRatio, handleLogin } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'

import { responsiveFontSize } from 'react-native-responsive-dimensions';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;
const App = () => {

  const [passVisible, setPassVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  var isValid = true;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const validate = () => {
    if (email.length == 0) {
      setEmailErr('Email do not empty.')
      isValid = false;
    } else
      if (reg.test(email) === false) {
        setEmailErr('Email not correct');
        isValid = false;
      } else {
        setEmailErr('')
      }
    // var password = 123456;
    var isValid = true;
    if (password.length == 0) {
      setPasswordErr('Password do not empty.')
      isValid = false;
    }else
    if (password.length < 8) {

      setPasswordErr('Password must be at least 8 characters');
      isValid = false;

    } else if (password.search(/[a-z]/) < 0) {

      setPasswordErr('Password must contain at least one lowercase letter');
      isValid = false;

    } else if (password.search(/[A-Z]/) < 0) {

      setPasswordErr('Password must contain at least one uppercase letter');
      isValid = false;

    } else if (password.search(/[0-9]/) < 0) {

      setPasswordErr('Password must contain at least one number');
      isValid = false;

    }  else{
      setPasswordErr('');
    }
    if(isValid)
  {
  Alert.alert('Registration Successfully.')
  }
  }
  return (

    <View style={styles.container}>
      <Text style={styles.headerText}>Log In</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>FACEBOOK</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.orContainer}>
        <View style={styles.lineStyle}></View>
        <Text style={styles.orText}>or
        
        </Text>
        <View style={styles.lineStyle}></View>
      </View>
      <TextInput
        label={'Email Address'}
        style={styles.inputStyle}
        mode='outlined'
        outlineColor='white'
        textColor='#3f4bb0'


        onChangeText={(text) => setEmail(text)}
      >
      </TextInput>
      <Text style={styles.ErrorStyle}>{emailErr}</Text>
      <TextInput
        label={'Password'}
        color='#c1c8e7'
        style={styles.inputStyle}
        mode='outlined'
        outlineColor='white'
        textColor='#131839'
        secureTextEntry={passVisible}
        onChangeText={(text) => setPassword(text)}

        right={
          <TextInput.Icon
            size={20}
            iconColor='#808191'
            icon={passVisible ? 'eye-off' : 'eye'}
            onPress={() => setPassVisible(!passVisible)}
          />
        }
      >
      </TextInput>
      <Text style={styles.ErrorStyle}>{passwordErr}</Text>
      <TouchableOpacity>
        <Text style={styles.condiText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View>
        <Button
          mode='contained'
          fontWeight='900'
          style={styles.loginButtonStyle}
          onPress={() => validate()}
        >Log In</Button>

      </View>

      <Text style={styles.conditionText}>Dont't have an account?</Text>
      <TouchableOpacity>
        <Text style={styles.registerstyle}>REGISTER <Icon name='arrowright'
          style={styles.iconStyle} size={17} color='#314BCE'></Icon></Text>
      </TouchableOpacity>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25
  },
  headerText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    marginTop: 30
  },
  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    margin: 11

  },
  buttonStyle: {
    padding: 13,
    color: '#2c3041',
    margin: 5,
    width: '54%',
    backgroundColor: '#F5F6FA'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3a3c57',

  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lineStyle: {
    borderColor: '#e6e6e6',
    borderBottomWidth: 1,
    width: '15%',
    alignSelf: 'center'
  },
  orText: {
    marginBottom: '1%',
    padding: '3%',
    alignSelf: 'center'
  },
  inputStyle: {
    fontSize: 15,
    fontWeight: '900',
    backgroundColor: '#F5F6FA',
    color: '#c1c8e7'
  },
  ErrorStyle: {
    color: 'red',

  },
  condiText: {
    fontSize: 13,
    alignSelf: 'flex-end',
    color: '#697ccb',
    textDecorationLine: 'underline',

  },
  loginButtonStyle: {

    backgroundColor: '#5771f9',
    borderRadius: 5,
    padding: 3,
    marginTop: '13%'
  },
  conditionText: {
    marginTop: '63%',
    fontWeight: 'bold',
    color: '#2c3041',
    marginBottom: '3%'
  },

  iconStyle: {
    alignItems: 'center'
  },
  registerstyle: {
    fontSize: 16,
    color: '#314BCE',
    fontWeight: '900'
  }

})


