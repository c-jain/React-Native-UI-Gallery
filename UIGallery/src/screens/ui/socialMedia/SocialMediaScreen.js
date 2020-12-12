// Navigation imports
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// Screen imports
import SocialMediaScreenPage1 from "./SocialMediaScreenPage1";
import SocialMediaScreenPage2 from "./SocialMediaScreenPage2";
// Component imports
import SocialMedia from "../../../components/socialMedia/SocialMedia";

class SocialMediaScreen extends Component {

    render() {
        Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName="SocialMedia" headerMode={"none"} >
                <Stack.Screen name="SocialMedia" component={SocialMedia} />
                <Stack.Screen name="SocialMediaScreenPage1" component={SocialMediaScreenPage1} />
                <Stack.Screen name="SocialMediaScreenPage2" component={SocialMediaScreenPage2} />
            </Stack.Navigator>
        );
    };
}

export default SocialMediaScreen;