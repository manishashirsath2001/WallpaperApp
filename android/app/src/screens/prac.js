import { StatusBar } from "react-native";
import { StyleSheet,Text,View } from "react-native";
import TextInputCustom from "./Component/TextInputCustom";
import { useState } from "react";

const App = () =>{
    const[mobileError,setMobileError] = useState('');

    const Validate=(mobile)=>{
        if(mobile.length < 10)
        {
            setMobileError('place Enter valid mobile number')
        }
        else{
            setMobileError('');
        }
    }


    return(
        <View style={Styles.container}>
            
            <TextInputCustom
            placeHolder={'Enter the name'}
            label={'Name'}
            onChangeText={(text)=>console.log(text)}
            />

            <TextInputCustom
            placeHolder={'Enter the age'}
            label={'age'}
            />

             <TextInputCustom
            placeHolder={'Enter the Mobile number'}
            label={'Mobile number'}
            onChangeText={(text)=>Validate(text)}
            error={mobileError}
            />
        </View>
    )
    }

 export default App

const Styles = StyleSheet.create({
    container:{
        flex:1,
       margin:20,
    
    }
});