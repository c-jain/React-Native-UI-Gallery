// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SocialMediaPage2 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>SocialMediaPage2</Text>
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

export default SocialMediaPage2;