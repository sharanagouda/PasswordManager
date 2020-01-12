import React from "react";
import {StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    buttonStyle: {
        padding: 14,
        borderRadius: Platform.OS === "ios" ? 12 : 4,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonTitle: {
        color: "#ffffff",
        fontSize: 16
    },
})

export default styles;