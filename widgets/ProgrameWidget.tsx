import {ScrollView, StyleSheet, Text, View} from "react-native";
import SubjectWidget from "./SubjectWidget.tsx";

const ProgrameWidget=({navigation})=>{
    return(
        <View style={styles.view}>
            <Text style={styles.name}>Programme Name</Text>
            <Text style={styles.amount}>250000</Text>
            <View style={styles.date}><Text style={{color:'white'}}>
                2024-03-29
            </Text></View>
            <ScrollView style={styles.scroll} horizontal={true}>
                <SubjectWidget navigation={navigation} subject='Java Script' />
                <SubjectWidget navigation={navigation} subject='Java' />
                <SubjectWidget navigation={navigation} subject='C#' />
                <SubjectWidget navigation={navigation} subject='Kotlin' />
                <SubjectWidget navigation={navigation} subject='Ruby' />
                <SubjectWidget navigation={navigation} subject='Go' />

            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        scroll:{

            marginTop:20
        },
        date:{
            width:120,
            height:35,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:'#d35400',
            borderRadius:50,
            marginTop:15,

        },
        amount:{
            color:'#d35400'
        },
        name:{
          fontSize:20,
            color:'#000'

        },
        view:{
            width:'100%',
            marginBottom:10,
           backgroundColor:'#bdc3c6',
            padding:8,
            borderRadius:6
        }
    }
)

export default ProgrameWidget;
