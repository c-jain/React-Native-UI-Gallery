// React imports
import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
// Image imports
import backgroundImage from "../assets/Authentication/Registration.png";
// Component imports
import Register from "../components/register/Register";

class RegistrationScreen extends Component {
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.mainView}>
                <Register navigation={this.props.navigation} />
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

export default RegistrationScreen;