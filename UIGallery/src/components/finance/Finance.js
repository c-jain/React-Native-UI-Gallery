// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// Component imports
import Header from "../header/Header";
// Dimension utility imports
import { windowHeight, windowWidth } from "../../utils/Dimensions";

class Finance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", route: "FinanceScreenPage1", Category: "Page1"},
                {id: "2", route: "FinanceScreenPage2", Category: "Page2"},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={{padding: 10}}
                onPress={() => this.props.navigation.navigate(item.route)}
            >
                <View style={styles.card}>
                    <Text style={{fontSize: 20, fontWeight: "700"}}>{item.Category}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Header title="Finance" />
                <FlatList 
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        borderRadius: 3,
        margin: 10,
        // width: windowWidth / 3,
        height: windowHeight / 5,
    }
});

export default Finance;