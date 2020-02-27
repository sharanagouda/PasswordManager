import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ScanInput, SubToolbar } from '../../components';
// import { createNewUser } from "../actions/auth.actions";
import styles from './styles';

class AddSite extends Component {
  goBack() {
    Actions.pop();
  }

  createNewUser = async values => {
    try {
      const response = await this.props.dispatch(createNewUser(values));
      if (!response.success) {
        throw response;
      }
    } catch (error) {
      //const newError = new ErrorUtils(error, "Signup Error");
      //newError.showAlert();
    }
  };

  onSubmit = values => {
    console.log(values);
    this.createNewUser(values);
  };

  renderTextInput = field => {
    const {
      meta: { touched, error },
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: { onChange, ...restInput },
    } = field;
    return (
      <View>
        <ScanInput
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };

  render() {
    const { handleSubmit, createUser } = this.props;
    return (
      <View style={styles.container}>
        <SubToolbar title={this.props.title} styles={{ backgroundColor: "red" }} />
        <View style={styles.formContainer}>
          <Field
            name="url"
            placeholder=""
            label="URL"
            component={this.renderTextInput}
          />
          <Field
            name="sitename"
            placeholder=""
            label="Site Name"
            component={this.renderTextInput}
          />
          <Field
            name="folder"
            placeholder="picker"
            label="Sector/Folder"
            component={this.renderTextInput}
          />
          <Field
            name="username"
            placeholder=""
            label="User Name"
            component={this.renderTextInput}
          />
          <Field
            name="sitepassword"
            placeholder=""
            label="Site Password"
            secureTextEntry={true}
            component={this.renderTextInput}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(this.onSubmit)}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Name is required';
  }
  return errors;
};

mapStateToProps = state => ({
  // createUser: state.authReducer.createUser
});

mapDispatchToProps = dispatch => ({
  dispatch,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'register',
    validate,
  }),
)(AddSite);
