// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import NewsPage1 from "../../../components/news/NewsPage1";

class NewsScreenPage1 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <NewsPage1 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default NewsScreenPage1;