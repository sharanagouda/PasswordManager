import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {reduxForm, Field} from 'redux-form';

import {Button, InputText} from '../../components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      mobNumber: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }
  /**
   * @function focusNextField
   * @description onClick of Input field it this function
   */
  focusNextField(id) {
    this.inputs[id].focus();
  }


  /**
   * @function onSubmit
   * @description onClick of onSubmit method alert will popup
   */
  onSubmit = values => {
    var object = {
      email: values.email,
      mobileNo: values.mobileNo ? values.mobileNo : null,
    };
    console.log('submit ', values);
  };
  renderTextInput = field => {
    console.log('renderInput ', field);
    const {
      meta: {touched, error},
      placeholder,
      isPassword,
      onIconPress,
      keyboardType,
      label,
      secureTextEntry,
      input: {onChange, ...restInput},
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          keyboardType={keyboardType}
          label={label}
          onIconPress={onIconPress}
          secureTextEntry={secureTextEntry}
          isPassword={isPassword}
          placeholder={placeholder}
          {...restInput}
        />
        <Text style={styles.errorText}>{touched ? error : ''}</Text>
      </View>
    );
  };

  render() {
    const {value} = this.state;
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Login screen</Text>
        <View>
          <Field
            style={{marginTop: 0}}
            name="email"
            label="Email"
            keyboardType="email-address"
            placeholder="Enter Email Address"
            component={this.renderTextInput}
          />
          <Field
            name="password"
            label="Password"
            component={this.renderTextInput}
            placeholder="Enter Password"
            onIconPress={this.onIconPress}
            isPassword={true}
            secureTextEntry={!this.state.isPasswordShown}
          />
        </View>
        <View>
          <Button
            title="Login"
            backgroundColor="rgb(15, 113, 184)"
            onPress={handleSubmit(this.onSubmit)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'login',
  }),
)(Login);

const styles = StyleSheet.create({
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
  passwordEyeIconCont: {
    position: 'absolute',
    bottom: 6,
    right: 16,
    zIndex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  errorText: {
    color: 'red',
    paddingHorizontal: 16,
  },
});
