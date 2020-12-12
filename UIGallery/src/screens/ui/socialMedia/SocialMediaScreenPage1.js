// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import SocialMediaPage1 from "../../../components/socialMedia/SocialMediaPage1";

class SocialMediaScreenPage1 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <SocialMediaPage1 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default SocialMediaScreenPage1;