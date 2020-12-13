// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
// Icon imports
import Ionicons from "react-native-vector-icons/Ionicons";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";

class FinancePage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", paymentType: "Groceries", amount: "400$"},
                {id: "2", paymentType: "Insurance", amount: "200$"},
                {id: "3", paymentType: "Car", amount: "100$"},
                {id: "4", paymentType: "Bills", amount: "700$"},
                {id: "5", paymentType: "Rent", amount: "650$"},
                {id: "6", paymentType: "Medical", amount: "80$"},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                onPress={() => {}}
            >
                <View style={styles.card}>
                    <View style={styles.paymentType}>
                        <Text style={styles.paymentAmount}>
                            {item.paymentType}
                        </Text>
                    </View>

                    <View>
                        <Ionicons name="arrow-forward" size={28} color="white" />
                        <View>
                            <Text style={styles.amount}>{item.amount}</Text>
                        </View>
                        <View style={{justifyContent: "center", alignItems: "center"}}>
                            <Text style={styles.total}>TOTAL</Text>
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
                        <Text style={styles.PF}>Personal Finance</Text>
                    </View>
                    <View style={styles.BC}>
                        <Text style={styles.B}>Balance</Text>
                    </View>
                    <View style={styles.AC}>
                        <Text style={styles.A}>538.9$</Text>
                    </View>
                </View>

                {/* Navbar */}
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={styles.navText}>Bank Accounts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.navText}>Financial Status</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.navText, {textDecorationLine: "underline"}]}>Payments</Text>
                    </TouchableOpacity>
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
    BC: {
        padding: 5
    },
    B: {
        fontSize: 20,
        fontWeight: "700",
        color: "white"
    },
    A: {
        color: "white",
        fontSize: 24,
        fontWeight: "700",
    },
    nav: {
        width: "100%",
        height : windowHeight / 15,
        flexDirection: "row",
        backgroundColor: "#768dc2",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 5,
        marginBottom: 5,
    },
    navText: {
        fontSize: 14,
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
    paymentAmount: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    amount: {
        fontSize: 14,
        fontWeight: "500",
        color: "white"
    },
    total: {
        fontSize: 8,
        fontWeight: "500",
        color: "white"
    }
});

export default FinancePage1;