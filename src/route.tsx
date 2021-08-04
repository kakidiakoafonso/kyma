import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import Login from './views/Login/Login'
import Cadastro from './views/cadastro/Cadastro'
import Splash from './views/Splash/Splash'
import AberturaCaixa from './views/AberturaCaixa/AberturaCaixa'


const Stack = createStackNavigator()


export default function route() 
{
    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}
                initialRouteName='login'>
                    <Stack.Screen name="splash" component={Splash}/>
                    <Stack.Screen name="login" component={Login}/>
                    <Stack.Screen name="cadastro" component={Cadastro}/>
                    <Stack.Screen name="aberturacaixa" component={AberturaCaixa}/>
                </Stack.Navigator>
        </NavigationContainer>
    )
}
