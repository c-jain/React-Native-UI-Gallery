// Navigation imports
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// Screen imports
import NewsScreenPage1 from "./NewsScreenPage1";
import NewsScreenPage2 from "./NewsScreenPage2";
// Component imports
import News from "../../../components/news/News";

class NewsScreen extends Component {

    render() {
        Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName="News" headerMode={"none"} >
                <Stack.Screen name="News" component={News} />
                <Stack.Screen name="NewsScreenPage1" component={NewsScreenPage1} />
                <Stack.Screen name="NewsScreenPage2" component={NewsScreenPage2} />
            </Stack.Navigator>
        );
    };
}

export default NewsScreen;