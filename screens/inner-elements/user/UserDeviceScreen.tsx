import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Icon} from "react-native-paper";

const UserDeviceScreen=({navigation})=>{
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.bleTouch} onPress={()=>navigation.navigate('UserScannedDevice')}>
                <Icon size={45} source='bluetooth' color='white'/>
            </TouchableOpacity>
        </View>
    );

};

const style=StyleSheet.create(
    {
        icon:{
            backgroundColor:'white'
        },
        bleTouch:{
            width:100,
            height:100,
            backgroundColor:'#0082FC',
            borderRadius:100,
            alignItems:'center',
            justifyContent:"center"
        },
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
    }
);

export default UserDeviceScreen;
