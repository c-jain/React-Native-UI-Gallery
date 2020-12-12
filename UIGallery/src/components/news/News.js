// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import Header from "../header/Header";

class News extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Header title="News" />
                <Text>List of news pages</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default News;