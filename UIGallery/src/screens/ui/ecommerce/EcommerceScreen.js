// Navigation imports
import { createStackNavigator } from "@react-navigation/stack";
// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// Screen imports
import EcommerceScreenPage1 from "./EcommerceScreenPage1";
import EcommerceScreenPage2 from "./EcommerceScreenPage2";
// Component imports
import Ecommerce from "../../../components/ecommerce/Ecommerce";

class EcommerceScreen extends Component {

    render() {
        Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName="Ecommerce" headerMode={"none"} >
                <Stack.Screen name="Ecommerce" component={Ecommerce}  />
                <Stack.Screen name="EcommerceScreenPage1" component={EcommerceScreenPage1} />
                <Stack.Screen name="EcommerceScreenPage2" component={EcommerceScreenPage2} />
            </Stack.Navigator>
        );
    };
}

export default EcommerceScreen;