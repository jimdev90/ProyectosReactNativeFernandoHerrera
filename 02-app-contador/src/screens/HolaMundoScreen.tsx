import {Text, View} from "react-native";
import React from "react";

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <Text style={{
                fontSize: 45,
                textAlign: "center"
            }}>Hola Jimmy</Text>
        </View>
    )
};
