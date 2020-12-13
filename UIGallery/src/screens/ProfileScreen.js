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
                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <TouchableOpacity
                        onPress={this.handleSignOut}
                        style={{borderWidth: 1, borderRadius: 3, backgroundColor: "orange", padding: 10}}
                    >
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Sign Out!</Text>
                    </TouchableOpacity>
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

export default ProfileScreen;