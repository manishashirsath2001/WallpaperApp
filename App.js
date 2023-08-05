import { StatusBar, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Screen from './android/app/src/Wapp/Screen'
import { RecoilRoot } from 'recoil'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './android/app/src/Wapp/Screen1'

export default function App () {
    const Stack = createNativeStackNavigator();
    return (
            <RecoilRoot>
                <NavigationContainer>
                        <Stack.Navigator initialRouteName='S'>
                            <Stack.Screen name='S' component={Screen}
                            options={{
                                headerStyle:{
                                    backgroundColor:'#000000',
                                },
                                headerTintColor:'#fff',
                                headerTitleStyle:{
                                    fontWeight:'bold'
                                },
                                headerTitleAlign:'center',
                                title:'Home'

                            }} />
                            <Stack.Screen name='S1' component={Screen1}
                            options={{
                                headerStyle:{
                                    backgroundColor:'#000000',

                                },
                                headerTintColor:'#fff',
                                headerTitleStyle:{
                                    fontWeight:'bold'
                                },title:'Back',
                                headerTitleAlign:'center'

                            }}
                            />
                        </Stack.Navigator>
                </NavigationContainer>
            </RecoilRoot>
    )
}
// export default App

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})

















