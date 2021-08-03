import React from 'react'
import { Image } from 'react-native'

export default function Splash() {
    return (
        <Image source={require('../../assets/img/1.png')} style={{flex:1}}
             resizeMode='contain'
        />
    )
}
