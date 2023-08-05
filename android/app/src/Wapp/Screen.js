import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { inputtextwallpaper } from './atoms/wallpaperinputtext'
import ProgressiveImage from './ProgressiveImage';
import Navbar from './Navbar'

const Screen = ({ navigation }) => {
  const access_key = 'BhS0GkRnzfmPafcx4xihUvDio0xpMXhy4kBUfGfO_AQ'
  const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper)

  const [imagecollection, setImagecollection] = useState([])
  useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchvalue}&client_id=${access_key}`)

      let jsondata = await data.json()
      setImagecollection(jsondata)
    }

    getimagecollection()
  }, [searchvalue])

  imagecollection.total == 0 && setSearchValue('all')

  const ShowWallpaper = (item) => {
    navigation.navigate('S1', {
    Clickedimage: `${JSON.stringify(item)}
    `})
  }
  return (
    
    <View style={styles.Container} >
      <Navbar />
      <Text style={styles.textStyle}>Showing results for {searchvalue}</Text>

      <FlatList numColumns={2} data={imagecollection.results}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => ShowWallpaper(item)}>
            <View style={styles.imageContainer}>
              {/* <Text>{item.title}</Text> */}
              <Image source={{ uri: item.cover_photo.urls.regular }} style={styles.image} />
            </View>
          </TouchableOpacity>
        }
      />
    </View>

  )
}

export default Screen

const styles = StyleSheet.create({

  imageContainer: {
    width: 200,
    height: 350,
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textStyle:{
    textAlign:'center',
    fontWeight:'900',
    color:'black'
  }

})