import { useNavigation } from '@react-navigation/native'
import { Icon, Separator } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,Image,
Dimensions} from 'react-native'

import max from './MaxStyle'
import min from './MinStyle'

//SVG's
import UserIcon from '../../assets/svg/user-profile.svg'
import LockIcon from '../../assets/svg/padlock.svg'

export default function Login() 
{
    const {height} = Dimensions.get('screen')
    const style = height > 640 ? max:min
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            

            <View style={style.sombra}>

            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('cadastro')}>
                    <Text style={style.TextHeader}>
                        Registrar
                    </Text>
                </TouchableOpacity>
            </View>

                <View style={style.wrapper}>
                    <View style={style.dataContainerView}>
                       <Image source={require('../../assets/img/Kyma1.png')}
                            style={style.logo}/>
                    </View>
                    
                    <KeyboardAvoidingView behavior="padding" style={style.dataContainerView}>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <UserIcon width={20} height={20}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Email"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <LockIcon width={20} height={20}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="senha"
                            secureTextEntry
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.esqueceuSenhaView}>
                            <Text style={style.TextHeader}>
                                Esqueceu a senha?
                            </Text>
                            <Text style={style.esqueceuSenhaTxt}>
                                clica aqui
                            </Text>
                        </View>
                    </KeyboardAvoidingView>

                    <View style={style.dataContainerView}>
                        <TouchableOpacity style={style.btnEntrar} >
                            <Icon name='arrowright' type='AntDesign' style={style.btnEntrarIcon}/>
                            <Text style={style.txtEntrar}>ENTRAR</Text>
                        </TouchableOpacity>
                       
                    </View>
                </View>
            </View>
            <View style={style.footer}>
                    <Text style={style.TextHeader}>
                        2021 | Todos os direitos reservado
                    </Text>
            </View>
        </View>
    )
}
