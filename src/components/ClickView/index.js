import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from "react-native";
import PropTypes from "prop-types";

const ClickView = props => {
    const { style } = props;
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={style}>{props.children}</View>
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={props.onPress} >
                <View style={style}>{props.children}</View>
            </TouchableOpacity>
        );
    }
};

ClickView.propTypes = {
    onPress: PropTypes.func.isRequired
};

ClickView.defaultProps = {};

export default ClickView;
