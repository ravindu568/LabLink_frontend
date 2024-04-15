import {Text, View, StyleSheet, ScrollView} from "react-native";
import ProgrameWidget from "../../../widgets/ProgrameWidget.tsx";

const UserAllProgrammeScreen=({navigation})=>{
    return (
        <ScrollView style={style.container}>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>
            <ProgrameWidget navigation={navigation}/>


        </ScrollView>
    );

};

const style=StyleSheet.create(
    {
        container:{
            flex:1,
            padding:10
        },
    }
);

export default UserAllProgrammeScreen;
