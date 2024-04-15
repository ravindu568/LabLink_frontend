import {Text, View, StyleSheet} from "react-native";

const AdminToDoList=({navigation})=>{
    return (
        <View style={style.container}>
            <Text>AdminToDoList</Text>
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

export default AdminToDoList;
