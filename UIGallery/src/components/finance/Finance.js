// React imports
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// Component imports
import Header from "../header/Header";
// Icons import
import AntDesign from "react-native-vector-icons/AntDesign";
// Dimension utility imports
import { windowHeight, windowWidth } from "../../utils/Dimensions";

class Finance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", route: "FinanceScreenPage1", Category: "Page1"},
                {id: "2", route: "FinanceScreenPage2", Category: "Page2"},
            ],
            likePage1: 0,
            likeIconNamePage1: "like2",
            dislikePage1: 0,
            dislikeIconNamePage1: "dislike2",
            likePage2: 0,
            likeIconNamePage2: "like2",
            dislikePage2: 0,
            dislikeIconNamePage2: "dislike2"
        }
    }

    handleLike = (category) => {
        if (category === "Page1") {
            const val = this.state.likePage1;
            if (val) {
                this.setState({
                    likePage1: 0,
                    likeIconNamePage1: "like2",
                    dislikePage1: 0,
                    dislikeIconNamePage1: "dislike2"
                });
            } else {
                this.setState({
                    likePage1: 1,
                    likeIconNamePage1: "like1",
                    dislikePage1: 0,
                    dislikeIconNamePage1: "dislike2"
                });
            }
        } else {
            const val = this.state.likePage2;
            if (val) {
                this.setState({
                    likePage2: 0,
                    likeIconNamePage2: "like2",
                    dislikePage2: 0,
                    dislikeIconNamePage2: "dislike2"
                });
            } else {
                this.setState({
                    likePage2: 1,
                    likeIconNamePage2: "like1",
                    dislikePage2: 0,
                    dislikeIconNamePage2: "dislike2"
                });
            }
        }
    }

    handleDislike = (category) => {
        if (category === "Page1") {
            const val = this.state.dislikePage1
            if (val) {
                this.setState({
                    dislikePage1: 0,
                    dislikeIconNamePage1: "dislike2",
                    likePage1: 0,
                    likeIconNamePage1: "like2"
                });
            } else {
                this.setState({
                    dislikePage1: 1,
                    dislikeIconNamePage1: "dislike1",
                    likePage1: 0,
                    likeIconNamePage1: "like2"
                });
            }
        } else {
            const val = this.state.dislikePage2
            if (val) {
                this.setState({
                    dislikePage2: 0,
                    dislikeIconNamePage2: "dislike2",
                    likePage2: 0,
                    likeIconNamePage2: "like2"
                });
            } else {
                this.setState({
                    dislikePage2: 1,
                    dislikeIconNamePage2: "dislike1",
                    likePage2: 0,
                    likeIconNamePage2: "like2"
                });
            }
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={{padding: 10}}>
                <View style={styles.card}>
                    <TouchableOpacity
                        style={styles.title}
                        onPress={() => this.props.navigation.navigate(item.route)}
                    >
                        <Text style={{fontSize: 20, fontWeight: "700"}}>{item.Category}</Text>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <View style={styles.icon}>
                            <TouchableOpacity onPress={() => this.handleLike(item.Category)}>
                                <AntDesign name={item.Category === "Page1" ? this.state.likeIconNamePage1 : this.state.likeIconNamePage2} size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleDislike(item.Category)}>
                                <AntDesign name={item.Category === "Page1" ? this.state.dislikeIconNamePage1 : this.state.dislikeIconNamePage2} size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cart}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>hello</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <Header title="Finance" />
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
    card: {
        flex: 1,
        elevation: 3,
        borderRadius: 3,
        margin: 10,
        height: windowHeight / 5,
        padding: 10
    },
    title: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: windowHeight / 9,
        padding: 5,
    },
    container: {
        flexDirection: "row",
        padding: 10,
    },
    icon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        width: "30%",
    },
    cart: {
        padding: 5,
        width: "70%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        
    },
    btn: {
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
    },
    btnText: {        
        fontWeight: "500",
    },
});

export default Finance;