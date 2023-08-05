import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'


const Screen1 = ()=> {
    const[hour,setHour] = useState('00')
    const[minute,setMinute] = useState('00')
    const[second,setSecond] = useState('00')
    const[ampm,setAmPm] = useState('AM')

useEffect(() => {
    getHour()
    getMinute()
    getSecond()
    getAmPm()
},[])

const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    hour < 10 ? setHour('0' + hour) : setHour(hour) 
    // console.log(hour)
    setHour(hour)
}
const getMinute = () => {
    const date = new Date();
    const minute = date.getMinutes();
    // console.log(minute)
    minute < 10 ? setMinute('0' + minute) : setMinute(minute) 
    // setMinute(minute)
 }
 const getSecond = () => {
    const date = new Date();
    const second = date.getSeconds();
    // console.log(minute)
    second < 10 ? setSecond('0' + second) : setSecond(second) 
    // setSecond(second)
 }
 const getAmPm = () => {
    const date = new Date();
    const ampm = date.getHours() >=12 ? 'PM' : 'AM';
    setAmPm(ampm)
 }

 setInterval(() => {
    getHour()
    getMinute()
    getSecond()
     getAmPm()
 }, 1000);

    return(
    <View style={Styles.container}>
        <Text style={Styles.hour}>{hour}</Text>
        <Text style={Styles.minute}>{minute}</Text>
        <Text style={Styles.second}>{second}</Text>
         <Text style={Styles.ampm}>{ampm}</Text>
       
    </View>
    )
}
const Styles=StyleSheet.create({
    container:{
    
       backgroundColor:'black',
       width:'100%',
       height:'100%',
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center'
    },
    hour:{
        color:'white',
        fontSize:240,
        fontWeight:'bold',
        lineHeight:320,
        height:280
    },
    minute:{
        color:'grey',
        fontSize:230,
        fontWeight:'bold',
        lineHeight:240,
        height:240, 
    },
   
    second:{
        color:'white',
        fontSize:200,
        fontWeight:'bold',  
        lineHeight:200,
        // height:190,
        // marginRight:100,
    },
     ampm:{
       
        color:'white',
        fontSize:8-0,
        fontWeight:'bold',
        lineHeight:80,
        // height:100,
        marginLeft:200,
        marginBottom:90
        
    },
    
});
export default Screen1
