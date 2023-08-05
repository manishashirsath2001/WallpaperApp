import { View, Text, StyleSheet, TextInput, Image} from 'react-native'
import React from 'react'
import {inputtextwallpaper } from './atoms/wallpaperinputtext'
import { useRecoilState } from 'recoil'

const Navbar = () => {
  const [searchvalue,setSearchValue] = useRecoilState
  (inputtextwallpaper)

  onChangeTextinput = (text)=> {
  // console.log(text)
  setSearchValue(text)
  console.log(searchvalue)

}
return (
  <View style={styles.container}>
    {/* <Text>Navbar</Text> */}
    <View style={styles.searchcon}>
      <Image source={require('../assets/image/search.png')}
        style={styles.Icon}
      />
      <TextInput onChangeText={this.onChangeTextinput} style={styles.searchinput}
        placeholder="Search Anything..."
      />
    </View>
  </View>
)
}
export default Navbar
const styles = StyleSheet.create({
  container: {
    // flex:1,
    paddingVertical: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    //   height:'100%'
  },
  Icon: {

    width: 25,
    height: 25,

  },
  searchcon:
  {
    // color:'black', 
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    // backgroundColor: 'black',
    elevation: 2,
    padding: 2,
    borderRadius: 2,
    width: '80%'

  },
  searchinput: {
    //  color:'black',
    width: "90%",
    fontSize: 16,
    paddingLeft: 10
  }

});

