// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
// Assets import 
import nasa from "../../assets/News/nasa.jpg";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";

class NewsPage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1"},
                {id: "2"},
                {id: "3"},
                {id: "4"},
                {id: "5"},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.card}
                onPress={() => {}}
            >
                <Image source={nasa} style={{width:100, height:100}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.textHead}>Curiosity rover finds clay on mars: NASA.</Text>
                    <Text style={styles.textSubHead}>NASA's curiosity Mars rover has found the heighest amount of clay... </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Daily Bungle
                    </Text>
                </View>
                
                {/* Navbar */}
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text style={styles.navText}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.navText}>Technology</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.navText}>Business</Text>
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
    header: {
        width: "100%",
        height: windowHeight / 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        backgroundColor: "#226b3c"
    },
    headerText: {
        fontSize: 28,
        fontWeight: "700",
        color: "white"
    },
    nav: {
        width: "100%",
        height : windowHeight / 15,
        flexDirection: "row",
        backgroundColor: "#2e8f50",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 5,
    },
    navText: {
        fontSize: 14,
        fontWeight: "700",
        color: "white"
    },
    card: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        marginBottom: 5,
        padding: 5
    },
    textContainer: {
        flex: 1,
        padding: 5,
        marginLeft: 5,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    textHead: {
        fontSize: 16,
        fontWeight: "700",
    },
    textSubHead: {
        fontSize: 14,
        fontWeight: "600",
        color: "grey"
    },
});

export default NewsPage1;