import { useNavigation } from '@react-navigation/native'
import { Icon, Separator } from 'native-base'
import React,{useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView,Image,
Dimensions} from 'react-native'
import style from './style'

//SVG's
import UserIcon from '../../assets/svg/user-profile.svg'
import LockIcon from '../../assets/svg/padlock.svg'
import AberturaModal from '../../component/AberturaModal/AberturaModal'

export default function AberturaCaixa() 
{
    const [modalShow, setmodalShow] = useState(false)
    
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            

            <View style={style.sombra}>

            <View style={style.header}>
                <TouchableOpacity  style={{width:80,height:30,
                    justifyContent:'center',}} onPress={()=>navigation.goBack()}>
                        <Icon name='arrowleft' type='AntDesign'  style={style.icons}/>
                </TouchableOpacity>
                <TouchableOpacity  style={{ width:80,height:30,
                        justifyContent:'center',
                        alignItems:'center'}}>
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
                    
                    <KeyboardAvoidingView behavior="padding" style={[style.dataContainerView,{height:'70%'}]}>
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

                        <TouchableOpacity style={style.btnEntrar} onPress={()=>setmodalShow(true)}
                        activeOpacity={0.6}>
                            <Icon name='arrowright' type='AntDesign' style={style.btnEntrarIcon}/>
                            <Text style={style.txtEntrar}>ENTRAR</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

        
                </View>
            </View>
            <View style={style.footer}>
                    <Text style={style.TextHeader}>
                        2021 | Todos os direitos reservado
                    </Text>
            </View>
            <AberturaModal visivel={modalShow} set={setmodalShow}/>
        </View>
    )
}
