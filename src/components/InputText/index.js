import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';

const defaultProps = {
  mapElement: n => {},
  onSubmitEditing: () => {},
  value: '',
  placeholder: '',
  maxLength: 200,
  keyboardType: 'default',
  secureTextEntry: false,
  returnKeyType: 'next',
  label: 'Label',
  style: {},
  isPassword: false,
  onIconPress: () => {},
};

class InputText extends Component {
  constructor(props) {
    super(props);
    this.mapElement = this.mapElement.bind(this);
  }

  mapElement = node => {
    this.props.mapElement(node);
  };

  render() {
    return (
      <View style={[styles.textInputContainer, this.props.style]}>
        <Text style={styles.textInputLabel}>{this.props.label}</Text>
        <TextInput
          style={styles.textInputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor="rgba(51, 51, 51, 0.6)"
          selectionColor="rgb(51, 51, 51)"
          returnKeyType={this.props.returnKeyType}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
          onChangeText={this.props.onChangeText}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onSubmitEditing={this.props.onSubmitEditing}
        />
        {/*{this.props.isPassword &&
                    <View style={componentstyles.passwordEyeIconCont}>
                        <TouchableOpacity onPress={this.props.onIconPress}>
                            <Icon
                                name={this.props.secureTextEntry ? "eye" : "eye-off"}
                                type="material-community"
                                color="rgb(51, 51, 51)"
                                size={28}
                            />
                        </TouchableOpacity>
                    </View>

    }*/}
      </View>
    );
  }
}

InputText.defaultProps = defaultProps;

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputContainer: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  textInputLabel: {
    color: 'rgb(15, 113, 184)',
    fontSize: 16,
  },
  textInputBox: {
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(204, 204, 204)',
    paddingBottom: 5,
    paddingTop: 12,
    fontSize: 18,
  },
});
