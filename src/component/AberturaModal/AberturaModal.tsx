import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base'
import React from 'react'
import { View, Text ,Modal,TouchableOpacity} from 'react-native'
import cores from '../../config/cores'

export default function AberturaModal({visivel,set}:{visivel : any ,set: any}) 
{
    const navigation = useNavigation()
    return (
        <Modal visible={visivel} transparent animationType='slide'>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',
                backgroundColor:'rgba(128,128,128, 0.6)'}}>
                <View style={{width:'70%',height:'30%',backgroundColor:'#f2f2f2',borderRadius:20}}>
                    <View style={{width:'100%',backgroundColor:cores.grey,alignItems:'flex-end',
                        height:'18%',justifyContent:'center',borderTopRightRadius:20,borderTopLeftRadius:20}}>
                        <View style={{flexDirection:'row',width:'70%',
                            justifyContent:'space-between',marginRight:10,alignItems:'center'}}>
                            <Text style={{fontSize:20,color:'#CfCFCF'}}>
                                ABERTURA DA CAIXA
                            </Text>
                            <TouchableOpacity onPress={()=>set(false)} activeOpacity={0.6}>
                                <Icon name='close' style={{color:cores.vermelho}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{width:'100%',height:'82%',justifyContent:'center',alignItems:'center'}}>
                        <View style={{
                            backgroundColor:cores.grey,
                            height: 65, width: '90%',
                            borderRadius:30,alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'row',
                            marginBottom:'7%'
                        }}>
                            <Text style={{color: cores.branco,fontWeight:'bold'}}>0.00 AOA</Text>
                        </View>

                        <TouchableOpacity style={{
                            backgroundColor:cores.vermelho,
                            height: 65, width: '90%',
                            borderRadius:30,alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'row'
                        }}
                            onPress={()=>navigation.navigate('aberturacaixa')}>
                            <Icon name='arrowright' type='AntDesign' style={{color: cores.branco,fontSize:18}}/>
                            <Text style={{color: cores.branco,marginLeft:10,fontWeight:'bold'}}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
