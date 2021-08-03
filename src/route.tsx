import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import Login from './views/Login/Login'


const Stack = createStackNavigator()


export default function route() 
{
    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="home" component={Login}/>
                </Stack.Navigator>
        </NavigationContainer>
    )
}
