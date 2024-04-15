import {Text, View, StyleSheet} from "react-native";

const UserToDoListScreen=({navigation})=>{
    return (
        <View style={style.container}>
            <Text>UserToDoListScreen</Text>
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

export default UserToDoListScreen;
