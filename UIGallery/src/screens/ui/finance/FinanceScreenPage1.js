// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import FinancePage1 from "../../../components/finance/FinancePage1";

class FinanceScreenPage1 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <FinancePage1 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default FinanceScreenPage1;