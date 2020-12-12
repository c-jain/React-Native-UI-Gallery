// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Ecommerce extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>List of ecommerce pages</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Ecommerce;