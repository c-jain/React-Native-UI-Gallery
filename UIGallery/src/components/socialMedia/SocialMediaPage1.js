// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
// Icon imports
import Ionicons from "react-native-vector-icons/Ionicons";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";
// Assets imports
import social from "../../assets/SocialMedia/social.jpg";
import pic from "../../assets/SocialMedia/pic.jpg";

class SocialMediaPage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1"},
                {id: "2"},
            ]
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.card}
                onPress={() => {}}
            >
                {/* Profile */}
                <View style={styles.profileCon}>
                    {/* Photo */}
                    <Image source={pic} style={{width:80, height:80, borderRadius: 40}} />                    
                    {/* Name */}
                    <View style={styles.nameCon}>
                        <Text style={styles.name}>Alexandra</Text>
                        <Text style={styles.time}>4 mins ago</Text>
                    </View>
                </View>

                {/* Text */}
                <View style={styles.mesCon}>
                    <Text style={styles.mes}>Hey there! This is a smaple post. Hope you like it. This post is about how to be social.</Text>
                </View>

                {/* Image */}
                <Image source={social} style={{width: "100%", height: 200}} />               

                {/* Icons */}
                <View style={styles.iconCon}>
                    <Ionicons name="heart" size={22} color="red" style={{marginRight: 35}} />
                    <Ionicons name="chatbubble-outline" size={22} color="black" style={{marginLeft: 35}} />
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
                        InstaShare
                    </Text>
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
        backgroundColor: "black",
        elevation: 15,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "700",
        color: "white"
    },
    card: {
        width: "100%",
        height: 400,
        padding: 10,
        marginBottom: 15,        
        backgroundColor: "#ebf0ed",
        elevation: 5
    },
    profileCon: {
        flexDirection: "row",
        padding: 5,
        marginBottom: 5,
    },
    nameCon: {
        padding: 5,
        justifyContent: "center",
        marginLeft: 5
    },
    name: {
        fontSize: 18,
        fontWeight: "700"
    },
    time: {
        color: "grey",
        fontSize: 14,
        fontWeight: "500"
    },
    mesCon: {
        padding: 5,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    iconCon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
});

export default SocialMediaPage1;