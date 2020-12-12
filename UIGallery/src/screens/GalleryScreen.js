// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Navigation imports
import { createStackNavigator } from "@react-navigation/stack";
// Screen imports
import EcommerceScreen from "./ui/ecommerce/EcommerceScreen";
import FinanceScreen from "./ui/finance/FinanceScreen";
import NewsScreen from "./ui/news/NewsScreen";
import SocialMediaScreen from "./ui/socialMedia/SocialMediaScreen";
// Component imports
import Gallery from "../components/gallery/Gallery";

class GalleryScreen extends Component {
    render() {
        Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName="SocialMediaScreen" headerMode={"none"} >
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="EcommerceScreen" component={EcommerceScreen} />
                <Stack.Screen name="FinanceScreen" component={FinanceScreen} />
                <Stack.Screen name="NewsScreen" component={NewsScreen} />
                <Stack.Screen name="SocialMediaScreen" component={SocialMediaScreen} />
            </Stack.Navigator>
        );
    }
}

export default GalleryScreen;