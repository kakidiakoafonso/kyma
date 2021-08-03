import { useNavigation } from '@react-navigation/native'
import { Icon, Separator } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,Image} from 'react-native'
import style from './style'

export default function Login() 
{
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
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Email"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='lock' type='FontAwesome' style={style.icons}/>
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
                        <TouchableOpacity style={style.btnEntrar} onPress={()=>navigation.navigate('cadastro')}>
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
