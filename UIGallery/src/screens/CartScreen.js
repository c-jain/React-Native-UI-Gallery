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
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20, fontWeight: "700"}}>No Orders!</Text>
                </View>
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