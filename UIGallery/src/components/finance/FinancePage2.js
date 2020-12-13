// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// Icon imports
import Ionicons from "react-native-vector-icons/Ionicons";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";

class FinancePage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", name: "Atta", amount: "100$"},
                {id: "2", name: "Oil", amount: "20$"},
                {id: "3", name: "Juice", amount: "10$"},
                {id: "4", name: "Pulses", amount: "70$"},
                {id: "5", name: "Milk", amount: "65$"},
                {id: "6", name: "Soap", amount: "80$"},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                onPress={() => {}}
            >
                <View style={styles.card}>
                    <View style={styles.nameCon}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                    </View>

                    <View>
                        <View>
                            <Text style={styles.amount}>{item.amount}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                {/* Header */}
                <View style={styles.headCon}>
                    <View style={styles.PFC}>
                        <Text style={styles.PF}>Groceries</Text>
                    </View>
                </View>

                {/* Content */}
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
    headCon: {
        width: "100%",
        height: windowHeight / 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#667db3"
    },
    PF: {
        fontSize: 28,
        fontWeight: "700",
        color: "white"
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 5,
        elevation: 5,
        backgroundColor: "#9ab3ed"
    },
    nameCon: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    name: {
        fontSize: 14,
        fontWeight: "500",
        color: "white"
    },
    amount: {
        fontSize: 14,
        fontWeight: "500",
        color: "white"
    },
});

export default FinancePage2;