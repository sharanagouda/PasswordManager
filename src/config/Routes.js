import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Home from '../containers/Home';
import Login from '../containers/Login';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key="auth" hideNavBar={true}>
            <Scene key="login" component={Login} title="login" initial={true} />
            <Scene key="home" component={Home} title="home" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
