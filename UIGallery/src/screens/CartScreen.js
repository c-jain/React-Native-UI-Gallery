// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import Header from "../components/header/Header";

class CartScreen extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Header title="Cart"/>
                <Text>Order</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default CartScreen;