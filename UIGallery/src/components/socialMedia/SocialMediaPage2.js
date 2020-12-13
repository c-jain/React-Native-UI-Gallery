// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// Icon imports
import Ionicons from "react-native-vector-icons/Ionicons";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";

class SocialMediaPage2 extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={28} color="white" />
                    <Text style={styles.headerText}>Post</Text>
                </View>

                <View style={styles.inputCon}>
                    <TextInput 
                        placeholder="What's on your mind?"
                        style={styles.input}
                    />
                </View>
                
                <Ionicons name="add-circle-sharp" size={50} color="white" style={styles.add} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "grey",
    },
    header: {
        width: "100%",
        height: windowHeight / 10,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        backgroundColor: "black",
        elevation: 15,
        marginBottom: 5,
        flexDirection: "row"
    },
    headerText: {
        fontSize: 18,
        fontWeight: "700",
        color: "white"
    },
    add: {
        position: "absolute",
        bottom: 20,
        right: 10,
    },
    inputCon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: windowHeight / 10,
        fontSize: 30,
        color: "#666"
    },
});

export default SocialMediaPage2;