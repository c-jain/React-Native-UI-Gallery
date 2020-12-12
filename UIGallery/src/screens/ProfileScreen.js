// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import Header from "../components/header/Header";

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                < Header title="My Profile" /> 
                <Text>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default ProfileScreen;