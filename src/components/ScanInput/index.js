import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string,
};

const defaultProps = {
    mapElement: n => { },
    onSubmitEditing: () => { },
    onChangeText: () => { },
    value: '',
    placeholder: '',
    maxLength: 200,
    keyboardType: 'default',
    secureTextEntry: false,
    label: '',
};

const styles = StyleSheet.create({
    inputBox: {
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderColor: '#000',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        marginVertical: 10,
    },
});

class ScanInput extends Component<{}> {
    state = {
        value: '',
    };

    componentDidMount() {
        this.setState({
            value: this.props.value,
        });
    }

    onChangeText = value => {
        this.setState(
            {
                value,
            },
            () => {
                this.props.onChangeText(value);
            },
        );
    };

    render() {
        const {
            placeholder,
            secureTextEntry,
            keyboardType,
            maxLength,
            value,
            onChangeText,
            onSubmitEditing,
            label
        } = this.props;
        return (
            <View>
                <View>
                    <Text style={{ color:"#787E8C"}}>{label}</Text>
                </View>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder={placeholder}
                    placeholderTextColor="#787E8C"
                    selectionColor="#999999"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    returnKeyType="next"
                    value={this.state.value}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={this.onChangeText}
                />
            </View>
        );
    }
}

ScanInput.defaultProps = defaultProps;

ScanInput.propTypes = propTypes;

export default ScanInput;
