// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth';
// Component imports
import Header from "../components/header/Header";

class ProfileScreen extends Component {

    handleSignOut = () => {
        auth()
        .signOut()
        .then((res) => {
            console.log("sign out response: " + JSON.stringify(res));
            console.log('User signed out!')
        })
    }

    render() {
        return (
            <View style={styles.mainView}>
                < Header title="My Profile" /> 
                <Text>Profile</Text>
                <TouchableOpacity
                    onPress={this.handleSignOut}
                >
                    <Text>Sign Out!</Text>
                </TouchableOpacity>
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