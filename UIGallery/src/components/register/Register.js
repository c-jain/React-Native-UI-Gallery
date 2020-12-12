// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// Icon imports
import Ionicons from "react-native-vector-icons/Ionicons";
// Dimension utility imports
import { windowWidth, windowHeight } from "../../utils/Dimensions";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    handleRegister = () => {
        console.log("Email/Password: " + this.state.email + "/" + this.state.password);
    }

    handleGoogleRegister = () => {
        console.log("Email/Password: " + this.state.email + "/" + this.state.password);
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.text}>Create an account</Text>
                
                {/* Email */}
                <TextInput 
                    onChangeText={(email) => this.setState({email})}
                    placeholder="Email"
                    style={styles.textInput}
                />

                {/* Password */}
                <TextInput 
                    onChangeText={(password) => this.setState({password})}
                    placeholder="Password"
                    style={styles.textInput}
                />

                {/* Register */}
                <TouchableOpacity
                    onPress={this.handleRegister}
                    style={styles.registerBtn}
                >
                    <Text style={styles.registerText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Google registration */}
                <TouchableOpacity
                    onPress={this.handleGoogleRegister}
                    style={styles.googleBtnContainer}
                >
                    <View style={styles.googleLogowrapper}>
                        <Ionicons name="logo-google" size={22} color="red" />
                    </View>
                    <View style={styles.googleTextWrapper}>
                        <Text style={styles.googleText}>Sign Up with Google</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navBtn}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                <Text style={styles.navBtnText}>Have an account? Sign In</Text>                        
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 28,
        fontWeight: '500',
        marginBottom: 10,
        color: "black"
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 3,
        width: "100%",
        height: windowHeight / 15,
        borderColor: "#ccc",
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        fontSize: 16,
        justifyContent: "center",
        alignItems: "center",
        color: "#666",
    },
    registerBtn: {
        width: "100%",
        height: windowHeight / 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        backgroundColor: "#3b68e3"
    },
    registerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
    },
    googleBtnContainer: {
        marginTop: 10,
        width: "100%",
        height: windowHeight / 15,
        padding: 10,
        borderRadius: 3,
        flexDirection: "row",
        backgroundColor: "#f5e7ea",
    },
    googleLogowrapper: {
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    googleTextWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    googleText: {
        fontSize: 18,
        fontWeight: '700',
        color : "red"
    },
    navBtn: {
        marginTop: 15
    },
    navBtnText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2e64e5'
    },
});

export default Register;