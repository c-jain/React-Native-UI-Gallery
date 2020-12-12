// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// Component imports
import NewsPage2 from "../../../components/news/NewsPage2";

class NewsScreenPage2 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <NewsPage2 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
});

export default NewsScreenPage2;