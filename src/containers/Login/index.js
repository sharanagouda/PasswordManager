/**
 * @author Sharanagouda Konasirasagi <sharanagouda.k@robosoftin.com>
 * @version 1.0.0
 * @summary Main Screen for the application.
 * @description This is the Main Screen of the application.
 */

/**
 * @import React compoment from "react" for creating custom react component and to use lifecycle
 * hooks come along with react.
 * @import StatusBar, View from "react-native" for creating our view.
 * @import connect from "react-redux" for connecting react compoenent with redux which will convert
 * our component as container component.
 */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
/**
 * @import styles object. This object have all the styles written for the screens.
 * the styles have been defined in a file named "styles" which is again importing
 * an object from theme file when our theme related styles have been defined.
 */

/**
 * @class Login
 * @extends Component
 * @summary Represents Login class.
 * @description This is a Login class. It extends react Component class for using the functions comes along with it.
 */
class Login extends Component {
  constructor() {
    super();
    this.state = {
      buttonId: 1,
    };
    this.handleViewContainerClick = this.handleViewContainerClick.bind(this);
  }
  handleViewContainerClick(id) {
    this.setState({
      buttonId: id,
    });
    //Alert.alert(`${this.state.buttonId}`);
  }

  /**
   * @function render: Its one of the main functions of react component. It renders the JSX on the screen
   * In render() we are showing the Status Bar with backgroundColor as white.
   */
  render() {
    return (
      <LinearGradient
        colors={['#20BBFF', '#0E85FF']}
        style={styles.mainContainer}>
        <View style={styles.mainContainer}>
          <View style={{paddingTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{width: 48, height: 60, paddingRight: 20}}
              />
              <Image
                source={require('../../assets/images/PASS_MANAGER.png')}
                style={{width: 109, height: 35, marginLeft: 10}}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{}}>
                <TouchableOpacity
                  onPress={() => this.handleViewContainerClick(1)}>
                  <Text>SignIn</Text>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  onPress={() => this.handleViewContainerClick(2)}>
                  <Text>SignUp</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {this.state.buttonId === 1 && (
            <View className="firstView">
              <Text>Hi</Text>
              <Text style={styles.buttonText}>Sign in with Facebook</Text>
            </View>
          )}
          {this.state.buttonId === 2 && (
            <View className="secondView">
              <Text>Hello</Text>
            </View>
          )}
        </View>
      </LinearGradient>
    );
  }
}

export default Login;
