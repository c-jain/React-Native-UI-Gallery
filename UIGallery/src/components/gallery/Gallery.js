// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import Header from "../header/Header";

class Gallery extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Header title="Gallery" />
                <Text>List of UIs</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default Gallery;