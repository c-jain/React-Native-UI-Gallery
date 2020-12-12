// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import FinancePage2 from "../../../components/finance/FinancePage2";

class FinanceScreenPage2 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <FinancePage2 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default FinanceScreenPage2;