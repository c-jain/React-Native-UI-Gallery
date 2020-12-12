// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import EcommercePage1 from "../../../components/ecommerce/EcommercePage1";

class EcommerceScreenPage1 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <EcommercePage1 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default EcommerceScreenPage1;