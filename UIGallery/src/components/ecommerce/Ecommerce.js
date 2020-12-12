// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import Header from "../header/Header";

class Ecommerce extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Header title="Ecommerce" />
                <Text>List of ecommerce pages</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default Ecommerce;