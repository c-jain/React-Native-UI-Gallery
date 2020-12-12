// Navigation imports
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// Screen imports
import FinanceScreenPage1 from "./FinanceScreenPage1";
import FinanceScreenPage2 from "./FinanceScreenPage2";
// Component imports
import Finance from "../../../components/finance/Finance";

class FinanceScreen extends Component {

    render() {
        Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName="Finance" headerMode={"none"} >
                <Stack.Screen name="Finance" component={Finance} />
                <Stack.Screen name="FinanceScreenPage1" component={FinanceScreenPage1} />
                <Stack.Screen name="FinanceScreenPage2" component={FinanceScreenPage2} />
            </Stack.Navigator>
        );
    };
}

export default FinanceScreen;