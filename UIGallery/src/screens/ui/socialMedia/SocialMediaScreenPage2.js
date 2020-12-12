// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import SocialMediaPage2 from "../../../components/socialMedia/SocialMediaPage2";

class SocialMediaScreenPage2 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <SocialMediaPage2 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default SocialMediaScreenPage2;