import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        console.log("LOADER COMPONENT WILL MOUNT");
        
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}