// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
// Icons import
import Ionicons from "react-native-vector-icons/Ionicons";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";
// Assets imports
import shoe from "../../assets/Ecommerce/shoe.jpg"

class EcommercePage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "2", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "3", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "4", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "5", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "6", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "7", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
                {id: "8", price: "$99.9", name: "OLYMPIC NIKE", type: "AIR FOAMPOSITE ONE..."},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.card}
                onPress={() => {}}
            >
                <Image source={shoe} style={{width:"100%", height:100}}/>
                <Text>{item.name}</Text>
                <Text style={{color: "grey"}}>{item.type}</Text>
                <Text style={{color: "green"}}>{item.price}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons name="menu" size={28} color="black" />
                    <Ionicons name="search" size={28} color="black" />
                </View>

                {/* Title */}
                <View style={styles.title}>
                    <Text style={styles.titleText}>NIKE</Text>
                </View>

                {/* Items */}
                <View style={styles.itemContainer}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        horizontal={false}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: windowHeight / 15,
        padding: 5,
        marginBottom: 5,
    },
    title: {
        width: "100%",
        height: windowHeight / 15,
        marginBottom: 5,
        justifyContent: "center",
        padding: 5,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '700',
    },
    itemContainer: {
        padding: 5
    },
    card: {
        margin: 5
    },
});

export default EcommercePage1;