import { useNavigation } from '@react-navigation/native'
import { Icon, Separator } from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView ,
Image,Dimensions} from 'react-native'
import max from './MaxStyle'
import min from './Minstyle'

//SVG's
import UserIcon from '../../assets/svg/user-profile.svg'
import LockIcon from '../../assets/svg/padlock.svg'
import NifIcon from '../../assets/svg/edit.svg'
import TelefoneIcon from '../../assets/svg/telephone.svg'
import EmailIcon from '../../assets/svg/email.svg'
import EnderecoIcon from '../../assets/svg/place.svg'


export default function Login() 
{
    const {height} = Dimensions.get('screen')
    const style = height > 640 ? max:min

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
                        <Image source={require('../../assets/img/fotoIcon.png')}
                        style={{width:'100%',height:'100%'}}/>
                    </View>
                    <Text style={style.txtFoto}>
                        Carregar foto em PNG ou JPG
                    </Text>
                </View>

                <KeyboardAvoidingView style={style.WrapperView}>
                    <Text style={style.txtTipoCadastro}>
                        TIPO DE CADASTRO 
                    </Text>
                    <View style={style.inputWrapperView}>
                       <View style={style.nomeSobrenomeView}>

                         <View style={style.inputView2}>
                                <View style={style.iconSeparatorContainer2}>
                                    <View style={{marginLeft:'45%'}}>
                                        <UserIcon width={20} height={20}/>
                                    </View>
                                    <View style={style.separador}/>
                                </View>
                                <TextInput
                                placeholder="Nome"
                                style={style.inputs}
                            />
                            </View>

                         <View style={style.inputView2}>
                                <View style={style.iconSeparatorContainer2}>
                                    <View style={{marginLeft:'45%'}}>
                                        <UserIcon width={20} height={20}/>
                                    </View>
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
                                <NifIcon width={20} height={20}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="NIF"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <TelefoneIcon width={20} height={20}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Telefone"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <EmailIcon width={20} height={20}/>  
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="E-mail"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <EnderecoIcon width={20} height={20}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Endereço"
                            style={style.inputs}
                        />
                        </View>
                        <View style={style.inputView}>
                            <View style={style.iconSeparatorContainer}>
                                <LockIcon width={20} height={20}/>
                                <View style={style.separador}/>
                            </View>
                            <TextInput
                            placeholder="Senha"
                            secureTextEntry
                            style={style.inputs}
                        />
                        </View>
                        
                        
                    </View>
                    
                        <TouchableOpacity style={style.btnCadastrar}
                            onPress={()=>navigation.navigate('aberturacaixa')}>
                            <Icon name='arrowright' type='AntDesign' style={style.btnEntrarIcon}/>
                            <Text style={style.txtEntrar}>CADASTRAR</Text>
                        </TouchableOpacity>
                   
                </KeyboardAvoidingView>

            </View>


            <View style={style.footer}>
                    <Text style={style.TextHeader}>
                        2021 | Todos os direitos reservado
                    </Text>
            </View>
        </View>
    )
}
