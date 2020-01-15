import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import AddSite from "../containers/AddSite";
import Home from '../containers/Home';
import Login from '../containers/Login';
import SiteDetails from "../containers/SiteDetails";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene key="auth" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" initial={true} />
            <Scene key="home" component={Home} title="Home" />
            <Scene key="addsite" component={AddSite} title="Add Site" />
            <Scene key="sitedetails" component={SiteDetails} title="Site Details" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
