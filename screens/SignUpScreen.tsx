import {Text, View, StyleSheet, Button, TouchableOpacity, Animated, FlatList} from "react-native";
import {useState} from "react";
import {TextInput} from "react-native-paper";
import ScrollView = Animated.ScrollView;

const SignUpScreen=({navigation})=>{

    let [username,setUserName]=useState("");
    let [password,setPassword]=useState("");

    return (
        <View style={style.container}>
            <ScrollView style={style.scrollView}>
                <View style={{alignItems:'center',marginTop:50,marginBottom:50}}>
                    <Text style={{fontSize:30}}>SignUp</Text>
                </View>
                <View>
                    <TextInput
                        style={style.input}
                        label="First Name"
                        mode="outlined"
                        outlineColor='#ecf0f1'
                        value={username}
                        onChangeText={text => setUserName(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={style.input}
                        label="Last Name"
                        mode="outlined"
                        outlineColor='#ecf0f1'
                        value={username}
                        onChangeText={text => setUserName(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={style.input}
                        label="UserName"
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        value={password}
                        onChangeText={text => setUserName(text)}

                    />
                </View>
                <View>
                    <TextInput
                        style={style.input}
                        label="Password"
                        mode='outlined'
                        outlineColor='#ecf0f1'
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}

                    />
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('LogInScreen')}  style={style.button}>
                        <Text style={{color:"white"}}>Regiser Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('LogInScreen')} style={[style.button,{backgroundColor: 'white'}]}>
                    <Text style={{color:"#16a085",textDecorationLine:'underline'}}>Already have an account</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )

}

const style=StyleSheet.create(
    {
        button:{
            backgroundColor:'#3498db',
            width:'100%',
            height:50,
            borderRadius:6,
            alignItems:'center',
            justifyContent:'center'
        },

        container:{
            flex:1,
        },
        input:{
            marginBottom:28
        },

        scrollView:{
            padding:25,
            backgroundColor:'white'

        }
    }
)

export default SignUpScreen;
