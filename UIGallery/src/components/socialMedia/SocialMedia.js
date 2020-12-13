// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// Component imports
import Header from "../header/Header";

class SocialMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", route: "SocialMediaScreenPage1", Category: "Page1"},
                {id: "2", route: "SocialMediaScreenPage2", Category: "Page2"},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={{padding: 10}}
                onPress={() => this.props.navigation.navigate(item.route)}
            >
                <Text>{item.Category}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Header title="Social Media" />
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
});

export default SocialMedia;