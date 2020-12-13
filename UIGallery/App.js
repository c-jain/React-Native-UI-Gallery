// Navigation imports
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// Firebase imports
import auth from '@react-native-firebase/auth';
// Google SignIn imports
import { GoogleSignin } from '@react-native-community/google-signin';
// Screen imports
import MainScreen from "./src/screens/MainScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SplashScreen from "./src/screens/SplashScreen";
// DOT ENV imports
import {CLIENT_ID} from "./ENV";

const Stack = createStackNavigator();

class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            initializing: true,
        }
    }

    
    onAuthStateChanged = (user) => {
        console.log("user: " + JSON.stringify(user));
        this.setState({initializing : false});
        if(user) {
            console.log("Main");
            this.setState({isAuthenticated: true});
        } else {
            console.log("Login");
            this.setState({isAuthenticated: false});
        }
    }

    componentDidMount() {
        // Listener to check state of user authentication
        auth().onAuthStateChanged(this.onAuthStateChanged);
        // Initialize Google SDK
        GoogleSignin.configure({
            webClientId: CLIENT_ID,
        });
    }
    
    render() { 
        if (this.state.initializing) {
            return <SplashScreen />
        }       
        return (
            <NavigationContainer>
                <StatusBar hidden={true}/>
                {
                    this.state.isAuthenticated ? (
                        <Stack.Navigator headerMode={"none"} >
                            <Stack.Screen name="Main" component={MainScreen} />
                        </Stack.Navigator>
                    ) : (
                        <Stack.Navigator  headerMode={"none"} >
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Registration" component={RegistrationScreen} />
                        </Stack.Navigator>
                    )
                }
            </NavigationContainer>
        );
    }
}

export default App;