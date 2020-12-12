// Navigation imports
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

// Screen imports
import MainScreen from "./src/screens/MainScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SplashScreen from "./src/screens/SplashScreen";

class App extends Component {
    
    render() {
        Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <StatusBar hidden={true}/>
                <Stack.Navigator initialRouteName="Main" >
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                    <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default App;