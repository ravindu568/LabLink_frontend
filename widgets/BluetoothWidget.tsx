import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SubjectWidget from "./SubjectWidget.tsx";
import {Icon} from "react-native-paper";

const BlutoothWidget=({navigation})=>{
    return(
        <View style={styles.view}>
           <View style={styles.IconView}>
               <Icon size={80} source='bluetooth' color='white'/>
           </View>

            <View style={{padding:10}}>
                <Text>Device Name:Potentiometer</Text>
                <Text>Mac Address:Potentiometer</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.cBtn}>
                        <Text>Connect</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fBtn}>
                        <Text>Forgot</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

const styles=StyleSheet.create(
    {
        fBtn:{
            backgroundColor:'red',
            padding:10,

        },
        cBtn:{
            backgroundColor:'#0082FC',
            padding:10
        },


        IconView:{
            padding:10,
            backgroundColor:'green',
            borderRadius:10
        },
        view:{
            width:'100%',
            marginBottom:10,
            backgroundColor:'#bdc3c6',
            padding:8,
            borderRadius:6,
            flexDirection:"row",

        }
    }
)

export default BlutoothWidget;
