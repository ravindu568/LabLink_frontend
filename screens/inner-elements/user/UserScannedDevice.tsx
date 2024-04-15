import {Text, View, StyleSheet, ScrollView} from "react-native";
import BluetoothWidget from "../../../widgets/BluetoothWidget.tsx";

const UserScannedDevice=({navigation})=>{
    return (

        <View style={style.container}>
            <View>
                <Text>Scanned Devices List</Text>
            </View>
            <ScrollView style={style.view} >
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>
                <BluetoothWidget navigation={navigation}/>

            </ScrollView>
        </View>
    );

};

const style=StyleSheet.create(
    {
        view:{
            width:'100%',
            height:200

        },
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',

        },
    }
);

export default UserScannedDevice;
