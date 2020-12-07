// Navigation imports
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

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
                <Stack.Navigator initialRouteName="SplashScreen" >
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
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