import React from "react";
import { View, Text, Button } from "react-native";

export default class Note extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Note Screen</Text>
            <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
            />
            </View>
        );
    }
}