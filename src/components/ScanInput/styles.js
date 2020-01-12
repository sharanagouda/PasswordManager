

import React from "react";
import {StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
    textInputContainerscan: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        backgroundColor: 'rgb(250,250,250)',
        borderColor: 'gray',
        paddingVertical: 3,
    },
    textInputLabelscan: {
        color: "black",
        fontSize: 14,
        width: '40%',
    },
    scanTextInputLabel: {
        color: "black",
        fontSize: 14,
        width: '35%',
        paddingLeft:0,
        paddingTop:18,
        backgroundColor:'#ffffff'
    },
    textInputBoxscan: {
        paddingHorizontal: 10,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 1,
        width: '60%',
        fontSize: 11
    },
})

export default styles;