// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// Component imports
import Header from "../header/Header";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", route: "EcommerceScreen", Category: "Ecommerce"},
                {id: "2", route: "FinanceScreen", Category: "Finance"},
                {id: "3", route: "NewsScreen", Category: "News"},
                {id: "4", route: "SocialMediaScreen", Category: "Social"},
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
                <Header title="Gallery" />
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

export default Gallery;