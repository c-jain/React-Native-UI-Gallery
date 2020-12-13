// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";
// Assets imports
import shoe from "../../assets/Ecommerce/shoe.jpg"

class EcommercePage2 extends Component {
    render() {
        return (
            <ScrollView style={styles.mainView}>
                {/* Image */}
                <View style={styles.imageContainer}>
                    <Image source={shoe} style={{height: "100%", width: "100%"}}/>
                </View>

                {/* Brand */}
                <View style={styles.brand}>
                    <Text style={styles.brandText}>NIKE</Text>
                </View>

                {/* Category */}
                <View style={styles.catogery}>
                    <Text style={styles.categoryText}>AIR FOAMPOSITE ONE</Text>
                </View>

                {/* Type */}
                <View style={styles.type}>
                    <Text style={styles.typeText}>"OLYMPIC"</Text>
                </View>

                {/* Price */}
                <View style={styles.price}>
                    <Text style={styles.priceText}>$99.9</Text>
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
    imageContainer: {
        height: windowHeight / 3,
        width: "100%"
    },
    brand: {
        width: "100%",
        height: windowHeight / 20,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 5,
    },
    brandText: {
        fontSize: 28,
        fontWeight: '700',
    },
    catogery: {
        width: "100%",
        height: windowHeight / 20,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
    },
    categoryText: {
        color: "grey",
        fontSize: 18,
        fontWeight: "500"
    },
    type: {
        width: "100%",
        height: windowHeight / 20,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    typeText: {
        color: "grey",
        fontSize: 18,
        fontWeight: "500"
    },
    price: {
        width: "100%",
        height: windowHeight / 20,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
    },
    priceText: {
        color: "green",
        fontSize: 28,
        fontWeight: "700"
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

export default EcommercePage2;