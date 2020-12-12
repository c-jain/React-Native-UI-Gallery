// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Gallery extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>List of UIs</Text>
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

export default Gallery;