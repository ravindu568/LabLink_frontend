import {Text, View, StyleSheet} from "react-native";

const UserNotificationScreen=({navigation})=>{
    return (
        <View style={style.container}>
            <Text>UserNotificationScreen</Text>
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

export default UserNotificationScreen;
