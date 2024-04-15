import {Text, View, StyleSheet} from "react-native";

const AdminAllProgramme=({navigation})=>{
    return (
        <View style={style.container}>
            <Text>AdminAllProgramme</Text>
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

export default AdminAllProgramme;
