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
import {Text, View, SafeAreaView} from 'react-native';

/**
 * @import styles object. This object have all the styles written for the screens.
 * the styles have been defined in a file named "styles" which is again importing
 * an object from theme file when our theme related styles have been defined.
 */
import styles from './styles';

/**
 * @import Routes for Screens
 */

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import Login from "./containers/Login"
/**
 * @class Main
 * @extends Component
 * @summary Represents Main class.
 * @description This is a Main class. It extends react Component class for using the functions comes along with it.
 */
class Main extends Component {
  /**
   * @function render: Its one of the main functions of react component. It renders the JSX on the screen
   * In render() we are showing the Status Bar with backgroundColor as white.
   */
  render() {
    return (
      <View style={{flex: 1}}>
        <Login />
      </View>
    );
  }
}

export default Main;
