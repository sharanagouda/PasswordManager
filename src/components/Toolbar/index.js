import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, Image} from 'react-native';

import styles from './styles';

defaultProps = {
  title: '',
  navIcon: '',
  onIconClicked: '',
};

class Toolbar extends Component {
  render() {
    return (
      <View style={styles.toolbarContainer}>
        <View style={styles.menubar}>
          <TouchableNativeFeedback onPress={this.props.openDrawer}>
            <Image source={require('../../assets/images/burger_menu.png')} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.screenTitlebar}>
          <Image source={require('../../assets/images/PASS_MANAGER.png')} />
        </View>
        <View style={styles.searchIcon}>
          <TouchableNativeFeedback onPress={this.props.openDrawer}>
            <Image source={require('../../assets/images/search.png')} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.cloudIcon}>
          <TouchableNativeFeedback onPress={this.props.openDrawer}>
            <Image source={require('../../assets/images/sync_icn.png')} />
          </TouchableNativeFeedback>
        </View>
        <View style={styles.profileIcon}>
          <TouchableNativeFeedback onPress={this.props.openDrawer}>
            <Image source={require('../../assets/images/profile.png')} />
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default Toolbar;

Toolbar.defaultProps = defaultProps;
