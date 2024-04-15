import {Text, View, StyleSheet} from "react-native";

const AdminDeviceScreen=({navigation})=>{
    return (
        <View style={style.container}>
            <Text>AdminDeviceScreen</Text>
        </View>
    );

};

const style=StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
    }
);

export default AdminDeviceScreen;
