import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SliderBox } from 'react-native-image-slider-box';


const SwitchExample = () => {

  const img = [require('../assets/image/teacher.jpg'), 
  require('../assets/image/teacher.jpg'), require('../assets/image/teacher.jpg'), 
  require('../assets/image/teacher.jpg')];

  return (
    <View style={{ flex: 1}}>
      <SliderBox
        images={img}
      ></SliderBox>
    </View>
  )
}

export default SwitchExample
