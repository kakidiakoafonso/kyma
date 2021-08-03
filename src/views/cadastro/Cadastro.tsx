import { useNavigation } from '@react-navigation/native'
import { Icon, Separator } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView ,Image} from 'react-native'
import style from './style'

export default function Login() 
{
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            

            <View style={style.sombra}>


            <View style={style.header}>
                <TouchableOpacity  style={style.btnVoltar} onPress={()=>navigation.goBack()}>
                        <Icon name='arrowleft' type='AntDesign'  style={style.icons}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.warn("AA")}
                    style={style.btnEntrar}>
                    <Text style={style.TextHeader}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
                
                <View style={style.logoView}>
                    <View style={style.image}>

                    </View>
                    <Text style={style.txtFoto}>
                        Carregar foto em PNG ou JPG
                    </Text>
                </View>

                <View style={style.WrapperView}>
                    <Text style={style.txtTipoCadastro}>
                        TIPO DE CADASTRO 
                    </Text>
                    <View style={style.inputWrapperView}>
                       <View style={style.nomeSobrenomeView}>

                         <View style={style.inputView2}>
                                <View style={style.iconSeparatorContainer2}>
                                    <Icon name='person-outline' type='Ionicons'  style={[style.icons,{marginLeft:'45%'}]}/>
                                   
                                    <View style={style.separador}/>
                                </View>
                                <TextInput
                                placeholder="Nome"
                                style={style.inputs}
                            />
                            </View>

                         <View style={style.inputView2}>
                                <View style={style.iconSeparatorContainer2}>
                                    <Icon name='person-outline' type='Ionicons'  style={[style.icons,{marginLeft:'45%'}]}/>
                                    <View style={style.separador}/>
                                </View>
                                <TextInput
                                placeholder="Apelido"
                                style={style.inputs}
                            />
                            </View>

                        

                       </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="NIF"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Telefone"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="E-mail"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Endereço"
                            style={style.inputs}
                        />
                        </View>
                        <KeyboardAvoidingView style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Senha"
                            secureTextEntry
                            style={style.inputs}
                        />
                        </KeyboardAvoidingView>
                        
                    </View>
                        <TouchableOpacity style={style.btnCadastrar}>
                            <Icon name='arrowright' type='AntDesign' style={style.btnEntrarIcon}/>
                            <Text style={style.txtEntrar}>CADASTRAR</Text>
                        </TouchableOpacity>
                   
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



{/* <TouchableOpacity style={style.btnEntrar}>
<Icon name='arrowright' type='AntDesign' style={style.btnEntrarIcon}/>
<Text style={style.txtEntrar}>ENTRAR</Text>
</TouchableOpacity>

<View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <Icon name='person-outline' type='Ionicons'  style={style.icons}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Email"
                            style={style.inputs}
                        />
                        </View> */}