

import React from "react";
import {StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
    textPhoneInputContainer: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 16,
        // marginTop: 11
    },
    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },
    textPhoneLabel: {
        fontSize: 16,
        color: "rgb(51,51,51)",
        marginTop: 20,
        marginLeft:5
    },
    textPhoneInputBox: {
        paddingHorizontal: 0,
        // paddingBottom: 6,
        fontSize: 16,
        color: "#0E85FF",
        opacity: 40,
    },
})

export default styles;