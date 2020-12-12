// React imports
import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
// Image imports
import backgroundImage from "../assets/Authentication/Registration.png";
// Components imports
import Login from "../components/login/Login";

class LoginScreen extends Component {
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.mainView}>
                <Login navigation={this.props.navigation} />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        resizeMode: "cover"
    },
});

export default LoginScreen;