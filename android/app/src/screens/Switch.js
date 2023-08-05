import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Switch } from 'react-native-paper'
import { SliderBox } from "react-native-image-slider-box";


const Switch = () => {
   const  img = [require('../assets/image/search.png'),
    require('../assets/image/search.png'),
    require('../assets/image/search.png'),
    require('../assets/image/search.png')];
    return (
    <View style={{ flex: 1}}>
        <SliderBox
        Image={img}
        autoplay={true}></SliderBox>

    </View>
    
    )
}
    export default Switch