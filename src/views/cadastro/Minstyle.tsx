import {StyleSheet} from "react-native";
import cores from "../../config/cores";

const style =  StyleSheet.create({
container:{
    flex: 1,
    backgroundColor:cores.branco
    },
wrapper:{
    width: '100%',
    height: '90%',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:cores.vermelho,
},
header:{
    height: 50,
    position: 'absolute',
    width: '100%',
    alignItems:'center',
    zIndex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    top: 0,
},
btnEntrar:{
    width:80,height:30,
    justifyContent:'center',
    alignItems:'center',
},
btnVoltar:{
    width:80,height:30,
    justifyContent:'center',
},
TextHeader:{
    color: cores.grey,
    marginRight:10,
    fontSize:18
},
sombra:{
    width:'100%',height: '90%',elevation:1,
    borderBottomRightRadius:30,
    justifyContent:'flex-end',alignItems:'center'
},
dataContainerView:{
    height: '30%',
    width: '90%',
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundColor:'pink'

},
btnCadastrar:{
    backgroundColor:cores.vermelho,
    height: 50, width: '90%',
    borderRadius:30,alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
},
txtEntrar:{
color: cores.branco,
marginLeft:10,
fontWeight:'bold'
},
btnEntrarIcon:{
    color: cores.branco,
    fontSize:18
},

inputView:{
    backgroundColor:'#f2f2f2',
    width: '100%', borderRadius:5,
    flexDirection:'row',
    height: 40, justifyContent:'center',
    paddingHorizontal:4,
    marginVertical:10,
},
inputView2:{
    backgroundColor:'#f2f2f2',
    width: '47%', borderRadius:5,
    flexDirection:'row',
    height: 40, justifyContent:'center',
    paddingHorizontal:4,
},
nomeSobrenomeView:{
    
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    
},
iconSeparatorContainer:{
    flexDirection:'row',   
    height: '100%',alignItems:'center',
    width: '15%',
    justifyContent:'space-evenly'
},
iconSeparatorContainer2:{
    flexDirection:'row',   
    height: '100%',alignItems:'center',
    width: '37%',
    justifyContent:'space-between',
    //backgroundColor:'red'
},
separador:{
    height:'80%',
    width:0.4,
    backgroundColor:cores.grey
},
inputs:{
    width: '85%'
},

footer:{
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    height: '10%'
},

icons:{
    color: cores.grey,
    fontSize:23
},

//aLTERACOES
logoView:{
    height:'15%',
    width: '80%',
    justifyContent:'space-evenly',
    alignItems:'center'
},
WrapperView:{
    height:'80%',
    width: '80%',
    alignItems:'center',
    //backgroundColor:'pink',
    //justifyContent:'center'
},
inputWrapperView:{
    height: '80%',
    width: '90%',
    //backgroundColor:'red'
},
image:{
    width: '16%',height:'50%',
    borderRadius:63,
    backgroundColor:cores.grey,
    borderWidth:3,
    borderColor:'rgba(204, 204, 204,0.6)'
},
txtTipoCadastro:{
    color: cores.grey,
    fontSize:14,
    marginVertical:'2%'
    
},
txtFoto:{
    color: cores.grey,
    fontSize:13
}
})

export default style