// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class EcommercePage1 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>EcommercePage1</Text>
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

export default EcommercePage1;