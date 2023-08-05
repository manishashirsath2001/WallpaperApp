
import {
    View, Text, StyleSheet, Alert, TouchableOpacity, PixelRatio,
    ScrollView
  } from 'react-native'
  import React, { useState } from 'react'
  import { Button, Checkbox, TextInput } from 'react-native-paper'
  import Icon from 'react-native-vector-icons/AntDesign'
  import { responsiveFontSize } from 'react-native-responsive-dimensions';
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  const App = () => {
    const [passVisible, setPassVisible] = useState(true);
    const [confirmPassVisible, setConfirmPassVisible] = useState(true);
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [conPasswordErr, setConPasswordErr] = useState('');
    var isValid = true;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const validate = () => {
      if (name.length == 0) {
        setNameErr('Full name do not empty.')
        isValid = false;
      } else
        if (name.length < 10) {
          setNameErr('Please enter atleast 10 character')
          isValid = false;
        }
        else {
          setNameErr('')
        }
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
        // isValid = false;
      }
     
      if(password.search != conPassword.search)
      {
        conPassword.setConPasswordErr("Password Don't Match");
        isValid = false;
      }
  
      if (isValid) {
        Alert.alert('Registration Successfully.')
      }
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>Register</Text>
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
            <Text style={styles.orText}>or</Text>
            <View style={styles.lineStyle}></View>
          </View>
          <TextInput
            label={'Full name'}
            style={styles.inputStyle}
            mode='outlined'
            outlineColor='white'
            textColor='#314BCE'
            onChangeText={(here) => setName(here)}
          >
          </TextInput>
          <Text style={styles.ErrorStyle}>{nameErr}</Text>
        <TextInput
          label={'Email Address'}
          style={styles.inputStyle}
          mode='outlined'
          outlineColor='white'
          textColor='#314BCE'
          onChangeText={(text) => setEmail(text)}
        >
        </TextInput>
        <Text style={styles.ErrorStyle}>{emailErr}</Text>
        <TextInput
          label={'Password'}
          style={styles.inputStyle}
          mode='outlined'
          outlineColor='white'
          textColor='#314BCE'
          secureTextEntry={passVisible}
          onChangeText={(text) => setPassword(text)}
          right={
            <TextInput.Icon
              icon={passVisible ? 'eye-off' : 'eye'}
              onPress={() => setPassVisible(!passVisible)}
            />
          }
        >
        </TextInput>
        <Text style={styles.ErrorStyle}>{passwordErr}</Text>
        <TextInput
          label={'Confirm Password'}
          style={styles.inputStyle}
          mode='outlined'
          outlineColor='white'
          textColor='#314BCE'
          secureTextEntry={confirmPassVisible}
          placeholderTextColor={'#7F8192'}
          onChangeText={(text) => setConPassword(text)}
          right={
            <TextInput.Icon
              icon={confirmPassVisible ? 'eye-off' : 'eye'}
              onPress={() => setConfirmPassVisible(!confirmPassVisible)}
            />
          }
        >
        </TextInput>
        <Text style={styles.ErrorStyle}>{conPasswordErr}</Text>
        <View style={styles.checkStyle}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            style={styles.checkBoxStyle}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.condiText}>I’ve read and agree to the<Text
            style={styles.diffColor}> terms</Text> of <Text
              style={styles.diffColor}>privacy policy</Text></Text>
        </View>
        <Button
          mode='contained'
          style={styles.regiButtonStyle}
          onPress={() => validate()}
        >Register</Button>
        <View style={styles.subContainer}>
          <Text style={{ color: 'black' }}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginStyle}>LOGIN <Icon name='arrowright'
              style={styles.iconStyle} size={15} color='#314BCE'></Icon></Text>
          </TouchableOpacity>
        </View>
      </View>
  </ScrollView >
  )
  }
  export default App
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 15
    },
    buttonStyle: {
      padding: 15,
      margin: 5,
      width: '54%',
      backgroundColor: '#F5F6FA'
    },
    buttonText: {
      fontSize: 15,
      textAlign: 'center',
      color: '#151940'
    },
    orContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    lineStyle: {
      borderColor: '#e6e6e6',
      borderBottomWidth: 1,
      width: '20%',
      alignSelf: 'center'
    },
    orText: {
      marginBottom: '1%',
      padding: '3%',
      alignSelf: 'center'
    },
    inputStyle: {
      backgroundColor: '#F5F6FA',
    },
    ErrorStyle: {
      color: 'red'
    },
    checkStyle: {
      flexDirection: 'row',
    },
    checkBoxStyle: {
      backgroundColor: '#F5F6FA'
    },
    condiText: {
      alignSelf: 'center',
      // fontSize: getFontSize(13)
      fontSize: responsiveFontSize(1.7) // 1 %
    },
    diffColor: {
      color: '#314BCE'
    },
    regiButtonStyle: {
      backgroundColor: '#5771F9',
      borderRadius: 5,
      padding: 3,
      marginTop: '10%'
    },
    subContainer: {
      marginTop: '38%'
    },
    iconStyle: {
      alignItems: 'center'
    },
    loginStyle: {
      color: '#314BCE',
      fontWeight: '900'
    }
  })
  