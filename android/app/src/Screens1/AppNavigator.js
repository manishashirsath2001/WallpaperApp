import { View,Text } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SwitchExmple from '../screens/SwitchExample';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SwitchExmple" component={SwitchExmple} />
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} 
                options={{headerShown:false}}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator