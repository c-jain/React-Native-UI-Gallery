// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// Assets import 
import nasa from "../../assets/News/nasa.jpg";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";

class NewsPage2 extends Component {
    render() {
        return (
            <ScrollView style={styles.mainView}>
                {/* Heading */}
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Curiosity rover finds clay on mars: NASA</Text>
                </View>

                {/* Image */}
                <View style={styles.imageContainer}>
                    <Image source={nasa} style={styles.image}/>
                </View>

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.contentText}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    heading: {
        width: "100%",
        height: windowHeight / 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    headingText: {
        fontWeight: "700",
        fontSize: 28
    },
    imageContainer: {
        padding: 5,
        width: "100%",
        
    },
    image: {
        width: "100%",
        height: windowHeight / 3
    },
    content: {
        width: "100%",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
    },
    contentText: {
        fontSize: 18,
        fontWeight: "500",
        textAlign: "left"
    },
});

export default NewsPage2;