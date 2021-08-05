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
    backgroundColor:cores.branco,
},
header:{
    height: 50,
    position: 'absolute',
    width: '100%',
    alignItems:'flex-end',
    zIndex:1,
    paddingVertical:10,
    top: 0
},
TextHeader:{
    color: cores.grey,
    marginRight:10
},
sombra:{
    width:'100%',height: '85%',elevation:1,
    borderBottomRightRadius:30,
    justifyContent:'center',alignItems:'center',
},
dataContainerView:{
    height: '30%',
    width: '90%',
    alignItems:'center',
    justifyContent:'space-evenly'

},
btnEntrar:{
    backgroundColor:cores.vermelho,
    height: 50, width: '90%',
    borderRadius:30,alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
},
txtEntrar:{
color: cores.branco,
marginLeft:10
},
btnEntrarIcon:{
    color: cores.branco,
    fontSize:18
},

inputView:{
    backgroundColor:'#f2f2f2',
    width: '90%', borderRadius:5,
    flexDirection:'row',
    height: 50, justifyContent:'center',
    paddingHorizontal:4,
    marginVertical:15
},
iconSeparatorContainer:{
    flexDirection:'row',   
    height: '100%',alignItems:'center',
    width: '15%',
    justifyContent:'space-evenly'
},
separador:{
    height:'80%',
    width:0.4,
    backgroundColor:cores.grey
},
inputs:{
    width: '85%'
},
esqueceuSenhaView:{
    flexDirection:'row',
    alignSelf:'flex-start',
    marginLeft:'6%',
    marginTop:10
},
esqueceuSenhaTxt:{
   color: cores.vermelho
},
footer:{
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    height: '15%'
},
logo:{
    width:'50%',height:60
},
icons:{
    color: cores.grey,
    fontSize:23
}

})

export default style