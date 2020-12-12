// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import EcommercePage2 from "../../../components/ecommerce/EcommercePage2";

class EcommerceScreenPage2 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <EcommercePage2 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default EcommerceScreenPage2;