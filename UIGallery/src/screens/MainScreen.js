// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icons import
import Ionicons from "react-native-vector-icons/Ionicons";
// Screen imports
import GalleryScreen from "./GalleryScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";

class MainScreen extends Component {
    render() {
        Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Gallery") {
                            iconName = focused ? "color-palette-sharp" : "color-palette-outline";
                        } else if (route.name === "Cart") {
                            iconName = focused ? "cart" : "cart-outline";
                        } else if (route.name === "Profile") {
                            iconName = focused ? "md-person-circle" : "md-person-circle-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Gallery" component={GalleryScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>           
        );
    }
}

export default MainScreen;