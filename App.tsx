import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import UserHomeScreen from "./screens/inner-elements/user/UserHomeScreen.tsx";
import {NavigationContainer} from "@react-navigation/native";
import UserDeviceScreen from "./screens/inner-elements/user/UserDeviceScreen.tsx";
import UserAllProgrammeScreen from "./screens/inner-elements/user/UserAllProgrammeScreen.tsx";
import UserToDoListScreen from "./screens/inner-elements/user/UserToDoListScreen.tsx";

import LogInScreen from "./screens/LogInScreen.tsx";
import SignUpScreen from "./screens/SignUpScreen.tsx";
import AdminHomeScreen from "./screens/inner-elements/admin/AdminHomeScreen.tsx";
import AdminDeviceScreen from "./screens/inner-elements/admin/AdminDeviceScreen.tsx";
import AdminAllProgramme from "./screens/inner-elements/admin/AdminAllProgramme.tsx";
import AdminToDoList from "./screens/inner-elements/admin/AdminToDoList.tsx";
import UserScannedDevice from "./screens/inner-elements/user/UserScannedDevice.tsx";

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function App():React.JSX.Element{
  const UserTabNavigator=()=>{

    return(
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({focused,color,size})=>{
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName=focused ? 'home':'home';
                break;
              case 'DeviceScreen':
                iconName=focused ? 'wifi':'wifi';
                break;
              case 'AllProgrammes':
                iconName = focused ? 'flask-outline':'flask-outline';
                break;
              case 'ToDoList':
                iconName = focused ? 'clipboard-list':'clipboard-list';
                break;

            }
            return <Icon size={30} color={color} source={iconName}/>
          },
          tabBarActiveTintColor:'#d35400',
          tabBarInactiveTintColor:'#bdc3c7',
        })}
      >

        <Tab.Screen name="Home" component={UserHomeScreen}
                    options={{headerShown:false}}
        />
        <Tab.Screen name="DeviceScreen" component={UserDeviceScreen}
                    options={{headerShown:false}}
        />
        <Tab.Screen name="AllProgrammes" component={UserAllProgrammeScreen}
                    options={{headerShown:false}}
        />
        <Tab.Screen name="ToDoList" component={UserToDoListScreen}
                    options={{headerShown:false}}
        />


      </Tab.Navigator>
    )
  };
  const AdminTabNavigator=()=>{

    return(
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({focused,color,size})=>{
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName=focused ? 'home':'home';
                break;
              case 'DeviceScreen':
                iconName=focused ? 'wifi':'wifi';
                break;
              case 'AllProgrammes':
                iconName = focused ? 'flask-outline':'flask-outline';
                break;
              case 'ToDoList':
                iconName = focused ? 'clipboard-list':'clipboard-list';
                break;

            }
            return <Icon size={30} color={color} source={iconName}/>
          },
          tabBarActiveTintColor:'#d35400',
          tabBarInactiveTintColor:'#bdc3c7',
        })}
      >

        <Tab.Screen name="Home" component={AdminHomeScreen}
                    options={{headerShown:false}}
        />
        <Tab.Screen name="DeviceScreen" component={AdminDeviceScreen}
                    options={{headerShown:false}}
        />
        <Tab.Screen name="AllProgrammes" component={AdminAllProgramme}
                    options={{headerShown:false}}
        />
        <Tab.Screen name="ToDoList" component={AdminToDoList}
                    options={{headerShown:false}}
        />


      </Tab.Navigator>
    )
  };

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="UserHomeScreen"
          component={UserTabNavigator}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="AdminHomeScreen"
          component={AdminTabNavigator}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="UserScannedDevice"
          component={UserScannedDevice}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
