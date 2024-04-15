import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Icon} from "react-native-paper";

const UserHomeScreen=({navigation})=>{
    return (
        <View style={style.container}>
           <View style={style.header}>
               <TouchableOpacity onPress={()=>navigation.navigate('AdminHomeScreen')} style={style.access}>
                   <Text style={{color:'white',}}>Access Admin</Text>
               </TouchableOpacity>
               <TouchableOpacity style={style.notification}>
                   <View style={style.badge}>
                       <Text style={{color:'white',fontSize:10}}>15</Text>
                   </View>
                   <Icon size={20} source='bell' color='white'/>
               </TouchableOpacity>
           </View>
        </View>
    );

};

const style=StyleSheet.create(
    {
        access:{
            width:120,
            height:35,
            backgroundColor:'#d35400',
            borderRadius:50,
            justifyContent:"center",
            alignItems:"center"
        },
        badge:{
            width:15,
            height:15,
            backgroundColor:'#3498db',
            borderRadius:50,
            justifyContent:"center",
            alignItems:"center",
            position:"absolute",
            top:5,
            right:10,
            zIndex:1
        },
        notification:{
            width:45,
            height:45,
            borderRadius:50,
            position:"relative",
            alignItems:"center",
            justifyContent:"center"
        },
        header:{
            width:'100%',
            height:50,
            backgroundColor:'#2c3e50'
            ,paddingRight:15,
            paddingLeft:15,
            justifyContent:"flex-end",
            alignItems:"center",
            flexDirection:"row"
        },
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'flex-start'
        },
    }
);

export default UserHomeScreen;
