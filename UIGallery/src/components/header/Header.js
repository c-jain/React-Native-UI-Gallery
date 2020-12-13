// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// Dimension utility imports
import { windowHeight, windowWidth } from "../../utils/Dimensions";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 15,
        width: "100%",
        elevation: 5    },
    text: {
        fontSize: 18,
        fontWeight: "700",
        fontFamily: "sans-serif-medium"
    },
});

export default Header;