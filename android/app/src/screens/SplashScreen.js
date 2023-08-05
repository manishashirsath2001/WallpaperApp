import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
// import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
    // useEffect(() => {
    // setTimeout(()=>{
    // navigation.navigate('login')
    // },3000)
    //},[]);
    return (
        <View style={styles.container}>
            <Icon
                name='doctor'
                size={100}

                color="#9775FA"
            />
            <Image
                source={require('../assets/image/search.png')}
                style={styles.ImageStyle}
                name='WhatsApp'
                size={80}
                height={70}
                width={80}
                marginTop={900}
                color="white"
            ></Image>
            <Text style={styles.textStyle}>from</Text>
        </View>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9775FA'
    },
    textStyle: {
        color: 'white',

        
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        marginTop: 290,
        marginBottom: 6,
        // paddingTop:0
    }
})