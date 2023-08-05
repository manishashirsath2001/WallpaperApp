import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from '../screen/LoginScreen';
// import RegisterScreen from '../screen/RegisterScreen';
import SplashScreen from '../DemoApp/android/app/src/screens/SplashScreen';
const Stack = createNativeStackNavigator();
const App = () => {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="splash" component={SplashScreen}
options={{headerShown:false}} />
{/* <Stack.Screen name="login" component={LoginScreen} />
<Stack.Screen name="register" component={RegisterScreen}/> */}
</Stack.Navigator>
</NavigationContainer>
)
}
export default App
