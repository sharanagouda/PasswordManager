/**
 * @author Sharanagouda Konasirasagi <sharanagouda.k@robosoftin.com>
 * @version 1.0.0
 * @summary App Screen for the application.
 * @description This is Starting Screen of the application.
 */

/**
 * @import React compoment from "react" for creating custom react component and to use lifecycle
 * hooks come along with react.
 * @import PersistGate from redux-persist for creating a local loading when server is not responding
 * @import Provider from "react-redux" for binding the app with this provider to pass the data from store to all screen
 */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import - custom classes
import Main from './src/Main';
import store from './src/config/Store';

/**
 * @returns {object}
 */
const persist = store();
/**
 * @class App
 * @extends Component
 * @summary Represents App class.
 * @description This is a App class. It extends react Component class for using the functions comes along with it.
 */

class App extends Component {
  /**
   * @function render: Its one of the main functions of react component. It renders the JSX on the screen
   * In render() we are showing the Status Bar with backgroundColor as white.
   */
  render() {
    return (
      <Provider store={persist.store}>
        <PersistGate loading={null} persistor={persist.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
