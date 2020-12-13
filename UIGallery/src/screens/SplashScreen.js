import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SplashScreen extends Component {
    render() {
        console.log("Splash Screen");
        return (
            <View style={styles.mainView}>
                <Text>Splash</Text>
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

export default SplashScreen;