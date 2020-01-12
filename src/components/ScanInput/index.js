import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from "./styles";


const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    value: "",
    onChangeText: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "label",
    style: {},
    editable: "",
    isPassword: false,
    onIconPress: () => {}
}

class ScanInput extends Component {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    render() {
        return (
            
            <View  style={[styles.textInputContainerscan, this.props.style]}>
                <TextInput
                    style={[styles.textInputBoxscan, this.props.inputStyle]}
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor= "rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType= {this.props.keyboardType}
                    maxLength= {this.props.maxLength}
                    value= {this.props.value}
                    onChangeText= {this.props.onChangeText} 
                    editable={this.props.editable}
                    />
            </View>
        );
    }
}

ScanInput.defaultProps = defaultProps;

export default ScanInput;